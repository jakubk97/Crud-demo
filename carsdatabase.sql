toc.dat                                                                                             0000600 0004000 0002000 00000011551 13517776530 0014460 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP               
            w           cars    11.4    11.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                    0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                    0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                    1262    33371    cars    DATABASE     �   CREATE DATABASE cars WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Polish_Poland.1250' LC_CTYPE = 'Polish_Poland.1250';
    DROP DATABASE cars;
             postgres    false         \           1247    33404    rola    TYPE     �   CREATE TYPE public.rola AS ENUM (
    'admin',
    'user',
    'ROLE_ADMIN',
    'ROLE_USER',
    'ROLE_admin',
    'ROLE_user'
);
    DROP TYPE public.rola;
       public       postgres    false         _           1247    33410    status    TYPE     c   CREATE TYPE public.status AS ENUM (
    'sold',
    'for_sale',
    'offer_to_buy',
    'empty'
);
    DROP TYPE public.status;
       public       postgres    false         �            1259    33372    cars    TABLE     |  CREATE TABLE public.cars (
    id bigint NOT NULL,
    body character varying(255),
    capacity double precision,
    color character varying(255),
    mileage double precision,
    model character varying(255),
    offerer character varying(30) DEFAULT ''::character varying,
    price double precision,
    year integer,
    id_manufacturer bigint,
    status public.status
);
    DROP TABLE public.cars;
       public         postgres    false    607         �            1259    33396    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public       postgres    false         �            1259    33380    manufacturers    TABLE     �   CREATE TABLE public.manufacturers (
    id bigint NOT NULL,
    country character varying(255),
    name character varying(255)
);
 !   DROP TABLE public.manufacturers;
       public         postgres    false         �            1259    33388    users    TABLE     �   CREATE TABLE public.users (
    id bigint NOT NULL,
    active boolean,
    firstname character varying(255),
    lastname character varying(255),
    login character varying(255),
    password character varying(255),
    role public.rola
);
    DROP TABLE public.users;
       public         postgres    false    604                   0    33372    cars 
   TABLE DATA               x   COPY public.cars (id, body, capacity, color, mileage, model, offerer, price, year, id_manufacturer, status) FROM stdin;
    public       postgres    false    196       2831.dat           0    33380    manufacturers 
   TABLE DATA               :   COPY public.manufacturers (id, country, name) FROM stdin;
    public       postgres    false    197       2832.dat           0    33388    users 
   TABLE DATA               W   COPY public.users (id, active, firstname, lastname, login, password, role) FROM stdin;
    public       postgres    false    198       2833.dat            0    0    hibernate_sequence    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hibernate_sequence', 38, true);
            public       postgres    false    199         �
           2606    33379    cars cars_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.cars DROP CONSTRAINT cars_pkey;
       public         postgres    false    196         �
           2606    33387     manufacturers manufacturers_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.manufacturers
    ADD CONSTRAINT manufacturers_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.manufacturers DROP CONSTRAINT manufacturers_pkey;
       public         postgres    false    197         �
           2606    33395    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         postgres    false    198         �
           2606    33398     cars fk644og684q7xuxvsrruflhj3c6    FK CONSTRAINT     �   ALTER TABLE ONLY public.cars
    ADD CONSTRAINT fk644og684q7xuxvsrruflhj3c6 FOREIGN KEY (id_manufacturer) REFERENCES public.manufacturers(id);
 J   ALTER TABLE ONLY public.cars DROP CONSTRAINT fk644og684q7xuxvsrruflhj3c6;
       public       postgres    false    196    2706    197                                                                                                                                                               2831.dat                                                                                            0000600 0004000 0002000 00000002661 13517776530 0014272 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        2	Sedan	1.39999999999999991	White	200000	Corolla	qwerty1	10000	2003	1	offer_to_buy
16	Minivan	2.5	White	390000	Transporter T4	\N	8500	1999	15	for_sale
17	SUV	2	Black	31000	Escape	\N	68000	2017	10	for_sale
18	Combi	1.89999999999999991	Beige	139900	Roomster	\N	19900	2009	6	for_sale
19	Combi	1.60000000000000009	Silver	154000	Astra H	\N	9900	2005	9	for_sale
23	Cabriolet	6.5	Light green	2300	Aventador	\N	2500000	2016	22	for_sale
25	Small	0.900000000000000022	Red	170000	Seicento	\N	400	1999	24	for_sale
26	Compact	1.89999999999999991	Blue	210000	Punto II	\N	600	2001	24	for_sale
27	Compact	1.19999999999999996	Green	160000	Punto II	\N	950	2000	24	for_sale
28	Combi	1.19999999999999996	Blue	41100	Fabia III	\N	39900	2017	6	for_sale
29	Minivan	1.5	Black	32000	C-MAX	\N	52900	2017	10	for_sale
31	Coupe	5.59999999999999964	Black	180596	CL C215	\N	26500	2000	8	for_sale
32	SUV	1.69999999999999996	Black	60000	Mokka	\N	29999	2015	9	for_sale
33	Minivan	2	Black	262000	Touran I 	\N	19700	2007	15	for_sale
34	Sedan	1.39999999999999991	Black	249000	Corolla	\N	20000	2008	1	for_sale
35	Combi	2	Black	262000	Octavia III	\N	43900	2015	6	for_sale
21	Combi	1.60000000000000009	Grey	89000	2008	\N	38900	2015	20	for_sale
14	SUV	3	Black	220000	GLK	qwerty1	35900	2009	7	offer_to_buy
13	SUV	2	Black	1	X3 G01	qwerty1	205000	2019	7	offer_to_buy
30	Small	1	Red	127000	Yaris I	qwerty1	3700	1999	1	offer_to_buy
12	Combi	2	Silver	255000	Mondeo	qwerty1	22900	2010	10	offer_to_buy
\.


                                                                               2832.dat                                                                                            0000600 0004000 0002000 00000000325 13517776530 0014266 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Japan	Toyota
5	Japan	Mazda
6	Czech Republic	Skoda
7	Germany	BMW
8	Germany	Mercedes-Benz
9	Germany	Opel
10	USA	Ford
11	Italy	Ferrari
15	German	Volkswagen
20	France	Peugeot
22	Italy	Lamborghini
24	Italy	Fiat
\.


                                                                                                                                                                                                                                                                                                           2833.dat                                                                                            0000600 0004000 0002000 00000000143 13517776530 0014265 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	t	admin	admin	admin	$2a$10$vEiE4Jig12TlEZ4Zk3kcm.7juf7r3hDRdAH4mbqQvq.uiEgL1Ywi2	ROLE_admin
\.


                                                                                                                                                                                                                                                                                                                                                                                                                             restore.sql                                                                                         0000600 0004000 0002000 00000011466 13517776530 0015412 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 11.4
-- Dumped by pg_dump version 11.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE cars;
--
-- Name: cars; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE cars WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Polish_Poland.1250' LC_CTYPE = 'Polish_Poland.1250';


ALTER DATABASE cars OWNER TO postgres;

\connect cars

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: rola; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.rola AS ENUM (
    'admin',
    'user',
    'ROLE_ADMIN',
    'ROLE_USER',
    'ROLE_admin',
    'ROLE_user'
);


ALTER TYPE public.rola OWNER TO postgres;

--
-- Name: status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.status AS ENUM (
    'sold',
    'for_sale',
    'offer_to_buy',
    'empty'
);


ALTER TYPE public.status OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cars; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cars (
    id bigint NOT NULL,
    body character varying(255),
    capacity double precision,
    color character varying(255),
    mileage double precision,
    model character varying(255),
    offerer character varying(30) DEFAULT ''::character varying,
    price double precision,
    year integer,
    id_manufacturer bigint,
    status public.status
);


ALTER TABLE public.cars OWNER TO postgres;

--
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO postgres;

--
-- Name: manufacturers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.manufacturers (
    id bigint NOT NULL,
    country character varying(255),
    name character varying(255)
);


ALTER TABLE public.manufacturers OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    active boolean,
    firstname character varying(255),
    lastname character varying(255),
    login character varying(255),
    password character varying(255),
    role public.rola
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: cars; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cars (id, body, capacity, color, mileage, model, offerer, price, year, id_manufacturer, status) FROM stdin;
\.
COPY public.cars (id, body, capacity, color, mileage, model, offerer, price, year, id_manufacturer, status) FROM '$$PATH$$/2831.dat';

--
-- Data for Name: manufacturers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.manufacturers (id, country, name) FROM stdin;
\.
COPY public.manufacturers (id, country, name) FROM '$$PATH$$/2832.dat';

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, active, firstname, lastname, login, password, role) FROM stdin;
\.
COPY public.users (id, active, firstname, lastname, login, password, role) FROM '$$PATH$$/2833.dat';

--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 38, true);


--
-- Name: cars cars_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);


--
-- Name: manufacturers manufacturers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.manufacturers
    ADD CONSTRAINT manufacturers_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: cars fk644og684q7xuxvsrruflhj3c6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT fk644og684q7xuxvsrruflhj3c6 FOREIGN KEY (id_manufacturer) REFERENCES public.manufacturers(id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          