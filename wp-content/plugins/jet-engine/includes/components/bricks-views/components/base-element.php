<?php
namespace Jet_Engine\Bricks_Views\Components;

use Bricks\Element;
use Jet_Engine\Bricks_Views\Helpers\Options_Converter;
use Jet_Engine\Bricks_Views\Helpers\Controls_Hook_Bridge;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Base_Element extends \Jet_Engine\Bricks_Views\Elements\Base {
	
	// Element properties
	public $category = 'jetengine'; // Use predefined element category 'general'
	public $name = null; // Make sure to prefix your elements
	public $icon = 'jet-engine-icon-component'; // Themify icon font class
	public $css_selector = ''; // Default CSS selector
	public $scripts = []; // Script(s) run when element is rendered on frontend or updated in builder

	public $jet_element_render = null;
	public $jet_engine_component = null;

	public function __construct( $element = null, $component = null ) {

		if ( $element && ! empty( $element['name'] ) ) {
			$component = jet_engine()->listings->components->get( $element['name'] );
		}

		if ( $component ) {

			$this->set_jet_engine_component( $component );
			$this->name = $component->get_element_name();

			parent::__construct( $element );
		}

	}

	public function set_jet_engine_component( $component ) {
		$this->jet_engine_component = $component;
	}

	// Return localised element label
	public function get_label() {
		return $this->jet_engine_component->get_display_name();
	}

	// Set builder control groups
	public function set_control_groups() {
		$this->register_general_group();
	}

	// Set builder controls
	public function set_controls() {
		$this->register_general_controls();
	}

	public function register_general_group() {
		$this->register_jet_control_group(
			'section_general',
			[
				'title' => esc_html__( 'General', 'jet-engine' ),
				'tab'   => 'content',
			]
		);

		$this->register_jet_control_group(
			'section_styles',
			[
				'title' => esc_html__( 'Styles', 'jet-engine' ),
				'tab'   => 'content',
			]
		);
	}

	public function register_general_controls() {

		$this->start_jet_control_group( 'section_general' );

		$this->register_jet_control(
			'component_context',
			[
				'tab'         => 'content',
				'label'       => esc_html__( 'Component Context', 'jet-engine' ),
				'description' => esc_html__( 'Set context to use for the dynamic data inside current component', 'jet-engine' ),
				'type'        => 'select',
				'options'     => jet_engine()->listings->allowed_context_list(),
				'default'     => 'default_object',
			]
		);

		$props  = $this->jet_engine_component->get_props();
		$styles = $this->jet_engine_component->get_styles();

		if ( ! empty( $props ) ) {

			foreach ( $props as $prop ) {

				$control_data = array_merge( [
					'tab'   => 'content',
				], $this->jet_engine_component->get_prop_for_control( $prop, [
					'media' => 'image',
				] ) );

				$this->register_jet_control( $prop['control_name'], $control_data );

			}

		}

		$this->end_jet_control_group();

		if ( ! empty( $styles ) ) {

			$this->start_jet_control_group( 'section_styles' );

			foreach ( $styles as $style ) {

				$control_data = [
					'label'       => $style['control_label'],
					'type'        => 'color',
					'render_type' => 'template',
					'default'     => '',
				];

				if ( ! empty( $style['control_default'] ) ) {
					$control_data['default'] = $style['control_default'];
				}

				$this->register_jet_control( $style['control_name'], $control_data );

			}

			$this->end_jet_control_group();

		}

	}

	public function set_looping_attr_in_component( $attributes, $key, $element ) {
		$attributes[ $key ]['data-query-loop-index'] = $this->jet_engine_component->get_id();
		return $attributes;
	}

	public function force_loop_index() {
		return $this->jet_engine_component->get_id();
	}

	// Render element HTML
	public function render() {

		parent::render();

		$this->jet_engine_component->set_component_context( $this->get_jet_settings( 'component_context' ) );

		$settings = array_merge( 
			$this->jet_engine_component->get_default_state( false, [ 'media_format' => 'id' ] ),
			$this->settings 
		);

		jet_engine()->bricks_views->listing->render->set_bricks_query( 
			$this->jet_engine_component->get_id(), 
			$settings 
		);

		$current_query = jet_engine()->bricks_views->listing->render->get_current_query( 
			$this->jet_engine_component->get_id() 
		);

		if ( $current_query ) {
			$current_query->loop_index = $this->jet_engine_component->get_id();
			$current_query->is_component_listing = true;
		}

		add_filter( 'bricks/element/render_attributes', [ $this, 'set_looping_attr_in_component' ], 0, 3 );
		add_filter( 'bricks/query/force_loop_index', [ $this, 'force_loop_index' ], 999 );

		$content  = $this->jet_engine_component->get_content( $settings, false );
		$css_vars = $this->jet_engine_component->css_variables_string( $settings );

		remove_filter( 'bricks/element/render_attributes', [ $this, 'set_looping_attr_in_component' ], 0, 3 );
		remove_filter( 'bricks/query/force_loop_index', [ $this, 'force_loop_index' ], 999 );

		$this->enqueue_scripts();
		$this->attributes['_root']['class'][] = 'brxe-jet-listing-el';

		echo '<div ' . $this->render_attributes( '_root' ) . ' style="' . $css_vars . '">';
		echo $content;
		echo "</div>";

		jet_engine()->bricks_views->listing->render->destroy_bricks_query_for_listing( 
			$this->jet_engine_component->get_id() 
		);

	}

}