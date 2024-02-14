# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
3.2.2

* Rails version
7.1.3

## System dependencies

### Node ###
- https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04

### Yarn
- https://linuxgenie.net/how-to-install-yarn-on-ubuntu-22-04/
### Ruby and RVM
- https://www.digitalocean.com/community/tutorials/how-to-install-ruby-and-set-up-a-local-programming-environment-on-ubuntu-22-04

### Rails
- https://gorails.com/setup/ubuntu/22.04#rails
### Redis
- https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-22-04

## Configuration
- Clone the repository.
- Install required dependencies between Redis, Node, Yarn, Ruby, Rvm and Rails acoording your operating system.
- Install and configure PostgreSQL according your operating system.
- Create a database schema call movies
- Execute migrations of project.
--- Rails db:migrate
- Insert database records with insertion script provided.
- Move to directory where is insertion script file then execute: ** psql -d movies -U user -a -f InsertsDB.sql

## Execution
In a terminal execute:
- rails s for start rails server
- ./bin/webpack-dev-server ./bin/webpack --watch
