DROP DATABASE IF EXISTS blogger;
CREATE DATABASE blogger;
create user IF NOT EXISTS test WITH PASSWORD 'test';
CREATE EXTENSION IF NOT EXISTSpgcrypto;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

\c blogger;

CREATE TABLE IF NOT EXISTS posts (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  text VARCHAR
);

grant all privileges on database blogger to test;
--GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO test;
GRANT ALL ON TABLE posts TO test;
GRANT ALL ON DATABASE blogger TO test;