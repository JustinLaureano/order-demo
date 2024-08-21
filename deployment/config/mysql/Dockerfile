FROM percona:8.0-centos

# Set proper permissions for mysql data
RUN chown -R mysql:root /var/lib/mysql/

# Add custom config settings
# COPY conf/config.cnf /etc/my.cnf.d/docker.cnf

# Expose the mysql port
EXPOSE 3306
