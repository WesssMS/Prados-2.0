<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'prados' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'vNKJ0.ICX8K6}D%B26EF/Fa]bt`a#rGMv}1G]}KGT/i=-w* br~YO7E.<z9m2gN}' );
define( 'SECURE_AUTH_KEY',  'DJuKOI0d(8nP1O,YtwEcX5{4Z7gVF}8Z7eO~/lp6$<,@Z=Nj)+cvOP?R=O/5Mti8' );
define( 'LOGGED_IN_KEY',    'LodkVomHT[X^rU#yS{BjXnJ6c;sUP._!1`3-D;zir4Lv|iD>1g{GKZn8%Vy*]%_?' );
define( 'NONCE_KEY',        'Xn,KxNo#p|]dUO3?NrJJ?2g*-|a<G=@5Nvc_*e[4}5r,::/]Ai^X%jGwu-g}=l 7' );
define( 'AUTH_SALT',        'bIa?J)rGE|Aa3F&MBw(5lv%N:7GOv||.LZ#X8#S@fDx.@.5jJ>yY-.6^6qlHFO/&' );
define( 'SECURE_AUTH_SALT', 'LBD|Rhm[2R_(fch0]8y|tkGIYcHXZ~Cx)`8|a(scx6xwV)d%L2&D#~:3k f}3-$t' );
define( 'LOGGED_IN_SALT',   'b @!|g;WJ~[~$s{~:tu~ruM&vrxLe3>nBb){G:tM0+c95w-uO_p]_2i|4e0T5R.Z' );
define( 'NONCE_SALT',       '.XAXF*Y7.T5^p+FN[_5X{YZ22GpWsKHf3FNcfShs>Yj#rv=xHHu!7u{ljSYQ/?1m' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'pv_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
