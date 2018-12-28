#!/bin/sh
open -n -a "Google Chrome" --args --user-data-dir=/tmp/temp_chrome_user_data_dir http://localhost:4200/ --disable-web-security
ng serve --base-href '/'
