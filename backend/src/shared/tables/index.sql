CREATE TABLE cities (
    id CHAR(36) NOT NULL PRIMARY KEY,
    value CHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE churches (
    id CHAR(36) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    id_city CHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_city) REFERENCES cities(id) ON DELETE CASCADE
);

CREATE TABLE ministries (
    id CHAR(36) NOT NULL PRIMARY KEY,
    value VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id CHAR(36) NOT NULL PRIMARY KEY,
    value VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE instruments (
    id CHAR(36) NOT NULL PRIMARY KEY,
    id_category CHAR(36) NOT NULL,
    value VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_category) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE status (
    id CHAR(36) NOT NULL PRIMARY KEY,
    value VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ministry_profiles (
    id CHAR(36) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NULL,
    id_church CHAR(36) NOT NULL,
    id_ministry CHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_church) REFERENCES churches(id) ON DELETE CASCADE,
    FOREIGN KEY (id_ministry) REFERENCES ministries(id) ON DELETE CASCADE
);

CREATE TABLE users (
    id CHAR(36) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    id_church CHAR(36) NOT NULL,
    id_ministry CHAR(36) NOT NULL,
    first_access_at TIMESTAMP NULL, 
    password_changed_at TIMESTAMP NULL,
    last_login_at TIMESTAMP NULL,
    failed_attempts INT DEFAULT 0,
    block_at TIMESTAMP NULL,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_church) REFERENCES churches(id) ON DELETE CASCADE,
    FOREIGN KEY (id_ministry) REFERENCES ministries(id) ON DELETE CASCADE
);

CREATE TABLE musician (
    id CHAR(36) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    id_church CHAR(36) NOT NULL,
    id_ministry CHAR(36) NOT NULL,
    id_instrument CHAR(36) NOT NULL,
    id_status CHAR(36) NOT NULL,    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_church) REFERENCES churches(id) ON DELETE CASCADE,
    FOREIGN KEY (id_ministry) REFERENCES ministries(id) ON DELETE CASCADE,
    FOREIGN KEY (id_instrument) REFERENCES instruments(id) ON DELETE CASCADE,
    FOREIGN KEY (id_status) REFERENCES status(id) ON DELETE CASCADE
);