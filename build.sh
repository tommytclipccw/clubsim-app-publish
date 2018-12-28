#!/bin/sh
ng build --prod --base-href=/clsmw/webapp/ --configuration=production
cd dist/
zip -r ../clsmw#webapp.war ./
cd ..
scp clsmw#webapp.war aclsexc@10.211.7.24:/app/tomcat/webapps/
