#!/bin/sh
ng build --prod --base-href=/clsmw/webapp/ --configuration=uat
cd dist/
zip -r ../clsmw#webapp.war ./
cd ..
