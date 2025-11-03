/* For every table creted id & created_at are mandatory */

/* Rules : 
    - Every colunm or table has to be in snake case 
    - Every enum has to be in camel case
*/


/* Experiences table */
create table experiences (
    id uuid default extensions.uuid_generate_v4 () not null primary key,
    created_at timestamptz default (now()) not null,
    --
    name text not null,
    type text not null,
    work text not null,
    url text not null,
    image_url text,
    date_start timestamptz not null,
    date_end timestamptz,
    description text
)

/* Projects table */
create table projects (
    id uuid default extensions.uuid_generate_v4 () not null primary key,
    created_at timestamptz default (now()) not null,
    --
    name text not null,
    type text,
    date_start timestamptz not null,
    date_end timestamptz,
    description text
)

/* Studies table */
create table studies (
    id uuid default extensions.uuid_generate_v4 () not null primary key,
    created_at timestamptz default (now()) not null,
    --
    name text not null,
    diploma_name text not null,
    date_start timestamptz not null,
    date_end timestamptz,
    url text,
    image_url text,
    description text
)

/* Socials table */
create table socials (
    id uuid default extensions.uuid_generate_v4 () not null primary key,
    created_at timestamptz default (now()) not null,
    --
    name text not null,
    link text not null
)

