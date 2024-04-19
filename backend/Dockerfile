# Use a base image with Java and Tomcat pre-installed
FROM tomcat:9-jdk11-openjdk-slim

COPY target/backend-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/

EXPOSE 8080

CMD ["catalina.sh", "run"]
