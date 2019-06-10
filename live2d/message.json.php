<?php
require('../../../../wp-load.php');
header("Content-Type: application/json;");
echo get_option('live2d_custommsg');
?>