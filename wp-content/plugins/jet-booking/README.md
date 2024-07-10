# ChangeLog

## 3.4.1
* ADD: `jet-booking/ical/export/bookings-params` hook for controlling export items;
* ADD: Virtual option for booking product ([#7531](https://github.com/Crocoblock/suggestions/issues/7531));
* ADD: End Date config option for each bookable item;
* UPD: Bookings meta query value handling;
* UPD: Booking visibility condition classes;
* FIX: Initial JS error of separate fields with calendar widget;
* FIX: Week-long booking offset option if Monday is first day of the week;
* FIX: Default one date value with per night booking period.

## 3.4.0
* ADD: End date option for date range picker ([#7300](https://github.com/Crocoblock/suggestions/issues/7300));
* ADD: Date range picker calendar prices ([#5419](https://github.com/Crocoblock/suggestions/issues/5419));
* ADD: Dynamic tag/Macros that display apartment status ([#3846](https://github.com/Crocoblock/suggestions/issues/3846));
* ADD: Booking modification deadline setting;
* UPD: Optimise day validation script;
* FIX: Date range selection speed;
* FIX: Booking Availability Calendar widget height change on month switch;
* FIX: Booked units SQL query;

## 3.3.2
* ADD: Taxes options for booking products in WooCommerce mode;
* UPD: WooCommerce mode removed booking product price suffix;
* FIX: Booking admin list date filters query;
* FIX: Weekly bookings and disabled days options conflict;
* FIX: Booking Availability Calendar widget in dynamic popup;
* FIX: Price calculation in JetPopup;
* FIX: Compatibility with JetEngine legacy forms.

## 3.3.1
* ADD: Hooks for filtering some properties in WC Booking product ([#7404](https://github.com/Crocoblock/suggestions/issues/7404));
* UPD: Plugin string translations;
* UPD: Site admins can edit all bookings from the frontend forms;  
* FIX: Date-range picker calendar labels typo;
* FIX: WC Booking products translations ([#7398](https://github.com/Crocoblock/suggestions/issues/7398));
* FIX: Admin booking filtering for One day booking;
* FIX: Current day availability if it is checkout day and per day booking type;

## 3.3.0
* ADD: Bookings list in WooCommerce my account page;
* ADD: Booking cancellation functionality;
* ADD: JetFormBuilder action to update bookings;
* FIX: Additional column creation while plugin setup;
* FIX: Bricks dynamic tags issues;
* FIX: Booking details popup opening from WooCommerce order page;
* FIX: Temporary booking removal from WooCommerce order;
* FIX: WooCommerce mode booking with one day booking option;
* FIX: Booking list filtering;
* FIX: Display booking form with calculation field in JetPopup.

## 3.2.2
* FIX: Units Count dynamic tag functionality;
* FIX: Check in/out field default value after filtration with configuration settings;
* FIX: Booking price calculation.

## 3.2.1
* ADD: JetForm check-in/out field styles controls;
* ADD: Add additional services to WC based bookings from code;  
* FIX: Units Count dynamic tag functionality;
* FIX: Bookings Count dynamic tag functionality;
* FIX: Admin booking creation/editing with disabled days and days off;
* FIX: Admin booking creation/editing price display;
* FIX: WC based booking with units and one day booking option;

## 3.2.0
* ADD: ability to export bookings ([#4125](https://github.com/Crocoblock/suggestions/issues/4125));
* ADD: Export functionality to calendars list;
* ADD: Booking Availability Calendar block for Gutenberg;
* ADD: Functionality to clear temporary bookings;
* ADD: Macros for booking custom data & macros for default booking data with format functionality;
* ADD: Form controls for date range picker in Bricks and Elementor page builders; 
* ADD: Added instance filter in Booking list admin page; 
* UPD: Remove required JetEngine dependence;
* UPD: Booking list admin improvements;
* UPD: Upcoming booking list improvements;
* FIX: Admin booking editing and creation with disabled days;
* FIX: Dashboard pages notice display;
* FIX: Booking Availability Calendar widget options compatibility with WC based booking form.

## 3.1.1
* FIX: Booking post typed display after filtration for different languages;
* FIX: Booking Availability Calendar trace styles selectors;
* FIX: Disabled days & Days Off compatibility with the checkout only option.

## 3.1.0
* ADD: JetEngine query builder Booking query;
* ADD: Ability to display booking using a Listing Grid & Dynamic Calendar widgets;
* ADD: Booking Availability Calendar element for Bricks builder;
* UPD: Ability to add booking to the event calendar from listing;
* FIX: Booking Availability Calendar widget display in Safari browser;
* FIX: Admin booking creation after adding units;
* FIX: Template path issues;
* FIX: Date range hovering when only-checkout date is last;
* FIX: Date range picker calendar days count display with Checkout only option.

## 3.0.2
* FIX: Admin booking when booking instance has units and one day booking option enabled;
* FIX: Booking order details display on the checkout page.

## 3.0.1
* UPD: Show booking instance unit name instead of ID in booking table;
* FIX: Parallel booking process for plain WooCommerce integration;
* FIX: Plain mode order booking info form fields values after update;
* FIX: Dynamic tag price per day/night values;
* FIX: Booking details WooCommerce order email headings styles;
* FIX: Plugin deactivation if JetEngine missed;
* FIX: Booking product with one day booking option;
* FIX: Admin booking update unit issue.

## 3.0.0
* ADD: Direct WooCommerce integration;
* ADD: Total price display in the admin booking add/edit popups;  
* UPD: Filters store functionality;
* UPD: Refactor plugin cron events;  
* UPD: Admin booking popups functionality;
* UPD: Booking & Calendar pages templates and styles;
* UPD: Booking pages script and styles enqueue;
* UPD: Booking setup page;
* FIX: Selected day clear for datepicker field;
* FIX: Dynamic tags error on none booking instance post types;
* FIX: `One day booking` option with Booking Availability Calendar widget;
* FIX: Some settings value backslash duplication;
* FIX: Custom labels functionality;
* FIX: Weekend pricing meta box popup horizontal scroll;
* FIX: Correct unit ID after booking admin update;
* FIX: `batchMode` date picker issues;  
* FIX: `Days Off` option removal in booking instance post types meta boxes.

## 2.8.0
* ADD: Advanced customization of booking rules;
* ADD: Creating a related order when creating a booking through the admin panel;
* ADD: Filtering and sorting functionality for the list of bookings in the admin panel;
* ADD: Two-way WooCommerce order sync;
* ADD: Admin datepicker compatibility with general `Week Starts On` setting.
* UPD: Some WooCommerce related options display;
* UPD: Default DB columns, remove unused options; 
* FIX: Days Off items titles with special chars;
* FIX: Related order post type creation with different post type supports settings;
* FIX: Apartment Booking action WooCommerce order details Booking Instance display name issue;
* FIX: WooCommerce related order Booking details view while edit info;
* FIX: Edit Calendars popup handling.

## 2.7.2
* ADD: Edit & delete functionalities to details popup;
* UPD: Better WPML/Polylang compatibility;
* FIX: JetEngine forms WC setup popup view;
* FIX: Reselect date range when editing booking;
* FIX: Proper units display after booking item editing;
* FIX: PHP 8.2 deprecation errors.

## 2.7.1
* ADD: Ability to edit units in admin booking area;
* ADD: Booking Availability Calendar widget searched dates display;
* ADD: Compatibility with new WooCommerce REST API checkout;
* FIX: Searched dates with the checkout only option;
* FIX: Booking Availability Calendar widget clear selection;
* FIX: Units count dynamic tag for instance without units;
* FIX: Dynamic tags fallback;
* FIX: Order meta error output.

## 2.7.0
* ADD: iCal templated editor;
* ADD: Compatibility with some core JetEngine macros;
* ADD: Remove calendar import field functionality;
* UPD: Better compatibility with WPML plugin, custom label translations;
* UPD: Booking JS methods globally accessible;
* FIX: iCal sync log appearance;
* FIX: Filters storage type call;
* FIX: Dynamic tags functionality with Bookings Availability widget;
* FIX: Saving iCal import URls;
* FIX: Calendars section popups view;

## 2.6.3
* ADD: Integration with Woocommerce High-Performance Order Storage;
* ADD: Elementor 3.10 compatibility with custom size unit;
* ADD: Polylang compatibility;
* ADD: Some global date picker configuration to individual bookable object;
* ADD: JetPlugins library;
* ADD: `'jet-booking.input.config'` and `'jet-booking.date-range-picker.date-show-params'` JS hooks in admin area date picker;
* ADD: `'jet-booking.date-range-picker.date-show-params'` and `'jet-booking.date-range-picker.disabled-day'` JS hooks for additional control over disable dates;
* UPD: JS hooks usage due to JetPlugins library;
* FIX: Order details info display in cart and checkout pages;
* FIX: Date picker value sync;

## 2.6.2
* ADD: Option in form action to disable WC integration;
* UPD: Booking info popup UI improvements;
* FIX: Nonce validation;
* FIX: Days Off option fallback value;
* FIX: Last Day removing in Days Off.

## 2.6.1.1
* FIX: `%ADVANCED_PRICE%` macros functionality.

## 2.6.1
* FIX: Date range filter for `checkin_checkout` query variable;
* FIX: Booking form date picking in JetPopup;
* FIX: Elementor Pro Popup date picker field issue.

## 2.6.0
* ADD: `'jet-booking/rest-api/bookings-list/bookings'` hook to control bookings display in admin area;
* ADD: `min_days`, `max_days`, `start_day_offset` date picker options;
* UPD: Reorganise settings pages;
* UPD: Date picker script refactor;
* UPD: Get value from single field for the date picker calendar;
* UPD: Booking Available Calendar widget controls;
* FIX: Elementor editor preview error;
* FIX: Advanced price value.

## 2.5.5
* ADD: Some WPML compatibility;
* UPD: Datepicker field templates;
* FIX: Calendar proper label in tooltip;
* FIX: Excluded Dates option handle in script and admin area datepicker;
* FIX: Default and filtered datepicker field values;
* FIX: Weeks offset functionality;
* FIX: Booking functionality for different languages;

## 2.5.4
* ADD: `jquery-date-range-picker` in to dashboard edit & add booking popup;
* ADD: `'jet-booking/google-calendar-url/utc-timezone'` hook for timezone manipulation in Google calendar event link;
* ADD: `'jet-booking/form-fields/check-in-out/default-value'` hook for default `check-in-out` field value;
* UPD: Booking admin popups templates;
* FIX: Advanced price rates default value.

## 2.5.3
* ADD: JS filter `'jet-booking/calendar/config'` for calendar widget config;
* ADD: JS filter `'jet-booking/apartment-price'` for apartment price;
* FIX: Booking calendar layout;

## 2.5.2
* ADD: Dynamic tags: Available units count, Bookings count;
* ADD: Additional custom labels;
* UPD: Allow filtering settings value before return with `'jet-booking/settings/get/' . $setting-key`;
* UPD: Custom labels default value initialization;
* FIX: Order of advanced prices application;
* FIX: `check-in-out` field searched dates;
* FIX: Dynamic tag price per day/night;
* FIX: Advanced price popups data duplication;
* FIX: Filter result with Checkout only option.

## 2.5.1
* ADD: Checkout only days option;
* ADD: `jet-booking/form-action/pre-process` hook to allow handle booking from 3rd party plugin or theme;
* UPD: Update error message in admin popups;
* FIX: Overlapping bookings issue while update booking in admin area;
* FIX: Price rates popups overlays;
* FIX: JetEngine form while plugin setup;
* FIX: Booking list pagination;
* FIX: Minor WooCommerce integration errors;
* FIX: Compatibility with Elementor 3.7.

## 2.5.0
* ADD: Creating booking from admin area;
* ADD: Days off functionality;
* ADD: Disable weekdays and weekends functionality;
* UPD: Admin Booking page popups;
* FIX: One day booking seasonal price;
* FIX: iCal sync wrong check out date;
* FIX: Searched dates display in date fields with One day booking option;
* FIX: Admin Calendar page styles.

## 2.4.6
* FIX: minor JS/PHP issue

## 2.4.5
* FIX: Per Day booking type same dateCheck-in and Check-out.

## 2.4.4
* ADD: Cookies filters searched date store type;
* UPD: WooCommerce order booking details in admin area;
* FIX: Seasonal prising empty rates issue;
* FIX: Booking apartment unit ID;
* FIX: Cron iCal interval synchronization;
* FIX: Default WC product ordering with JetBooking integration;
* FIX: JetBooking dynamic tags;
* FIX: Date range filed in popup after ajax call;
* FIX: Items with units booked dates using per day booking period;
* FIX: Edit&Details popups view in booking list page;
* FIX: Calendar widget editor render;
* FIX: Session filters searched date store type.

## 2.4.3
* FIX: apply units;
* FIX: returning a string instead of output;
* FIX: get_booked_apartments ignore apartments with invalid statuses;
* FIX: Elementor 3.6 compatibility.

## 2.4.2
* FIX: First day of the week

## 2.4.1
* FIX: Translation strings
* FIX: Seasonal prices without post editor

## 2.4.0
* ADD: Seasonal prices

## 2.3.5
* FIX:Synchronizing calendars

## 2.3.4
* FIX:Error of check-in-out fields when submitting a form

## 2.3.3
* FIX: JetFormBuilder compatibility

## 2.3.2
* FIX: Price per 1 day/night

## 2.3.1
* FIX: iCal compatibility

## 2.3.0
* ADD: JetFormBuilder plugin compatibility

## 2.2.6
* FIX: Display of booked days in the calendar

## 2.2.5
* FIX: check in - check out field

## 2.2.4
* ADD: Default apartment price value
* FIX: Booking Availability Calendar

## 2.2.3
* FIX: Init check-out field

## 2.2.2
* FIX: Placeholder in check-out field
* FIX: Option per nights. When the option is enabled, 1 day cannot be booked as the beginning and end of the booking
* FIX: Fixed calendar on mobile device
* FIX: Plugin localization

## 2.2.1
* FIX: Check-in/check-out field in booking form

## 2.2.0
* FIX: iCal post count
* ADD: Select the first day of the week
* ADD: compatibility with php 5.6 +

## 2.1.2
* UPD: Added localization file

## 2.1.1
* FIX: WC product creation.

## 2.1.0
* ADD: Added Booking Availability Calendar widget;
* ADD: Allow to add booking details to WooCommerce checkout fields;
* ADD: Added Property Rates Based on the length of stay;
* ADD: Allow to add booking details to WooCommerce orders;
* ADD: Allow ability for users to add a booking to their calendar.
* FIX: Fixed minor bugs.
