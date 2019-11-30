<?php
register_rest_field(array('post'), 'featured_img', array('get_callback' => 'gb_get_featured_image'));

function gb_get_featured_image($object, $field_name, $request) {
    if ($object['featured_media']) {
        // Get the image url and the post meta from the featured media ID
        $image = wp_get_attachment_image_src($object['featured_media'], 'full');
        $alt = get_post_meta($object['featured_media'], '_wp_attachment_image_alt', true);

        return array('url' => $image[0], 'alt' => $alt);
    } else {
        return;
    }
}

add_theme_support( 'post-thumbnails' );
