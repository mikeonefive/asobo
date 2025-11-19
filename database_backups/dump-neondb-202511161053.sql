--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5 (aa1f746)
-- Dumped by pg_dump version 17.0

-- Started on 2025-11-16 10:53:40

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 319550)
-- Name: event; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.event (
    creation_date timestamp(6) without time zone,
    date timestamp(6) without time zone NOT NULL,
    modification_date timestamp(6) without time zone,
    creator_id uuid,
    id uuid NOT NULL,
    pictureuri character varying(4096),
    description character varying(255) NOT NULL,
    location character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    is_private boolean DEFAULT true
);


ALTER TABLE public.event OWNER TO neondb_owner;

--
-- TOC entry 218 (class 1259 OID 319557)
-- Name: event_participants; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.event_participants (
    attended_events_id uuid NOT NULL,
    participants_id uuid NOT NULL
);


ALTER TABLE public.event_participants OWNER TO neondb_owner;

--
-- TOC entry 219 (class 1259 OID 319560)
-- Name: medium; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.medium (
    event_id uuid,
    id uuid NOT NULL,
    mediumuri character varying(4096) NOT NULL
);


ALTER TABLE public.medium OWNER TO neondb_owner;

--
-- TOC entry 222 (class 1259 OID 344064)
-- Name: role; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.role (
    id bigint NOT NULL,
    name character varying(255)
);


ALTER TABLE public.role OWNER TO neondb_owner;

--
-- TOC entry 224 (class 1259 OID 344074)
-- Name: role_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.role_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.role_seq OWNER TO neondb_owner;

--
-- TOC entry 220 (class 1259 OID 319567)
-- Name: user_comment; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.user_comment (
    creation_date timestamp(6) without time zone,
    modification_date timestamp(6) without time zone,
    author_id uuid NOT NULL,
    event_id uuid,
    id uuid NOT NULL,
    text character varying(255) NOT NULL,
    pictureuri character varying(4096)
);


ALTER TABLE public.user_comment OWNER TO neondb_owner;

--
-- TOC entry 221 (class 1259 OID 319572)
-- Name: users; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.users (
    is_active boolean NOT NULL,
    register_date timestamp(6) without time zone,
    id uuid NOT NULL,
    pictureuri character varying(4096),
    email character varying(255) NOT NULL,
    first_name character varying(255) NOT NULL,
    location character varying(255),
    old_password character varying(255),
    password character varying(255) NOT NULL,
    salutation character varying(255) NOT NULL,
    surname character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    about_me character varying(255)
);


ALTER TABLE public.users OWNER TO neondb_owner;

--
-- TOC entry 223 (class 1259 OID 344069)
-- Name: users_roles; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.users_roles (
    users_id uuid NOT NULL,
    roles_id bigint NOT NULL
);


ALTER TABLE public.users_roles OWNER TO neondb_owner;

--
-- TOC entry 3379 (class 0 OID 319550)
-- Dependencies: 217
-- Data for Name: event; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.event (creation_date, date, modification_date, creator_id, id, pictureuri, description, location, title, is_private) FROM stdin;
2025-07-11 19:33:23.682237	2025-07-13 13:00:00	\N	\N	de32052d-645f-41d1-b43c-70621565ff7a	/uploads/event-cover-pictures/aaf0a06d-8f4a-4dca-ae8d-7d881882abd4_franzi.jpg	Cosplaying as a Viennese tram with the master cosplayer Franzi a.k.a. 5er	Vienna	Tram Cosplaying	f
2025-05-21 13:59:21.048244	2025-06-21 20:00:00	\N	7767118c-19bd-4c28-8129-c0abda74b46c	aaed8676-8b38-4c7a-b8b1-66dd683a1a96	/uploads/event-cover-pictures/f40bf03b-c55b-4c6a-801b-9b764fc99262_movie_night.jpg	Join us for the most bestest and extravagant movie night ever! Yeah! Bring your friends and don’t forget your own popcorn, nachos and booze...	San Juan Capistrano, CA	Movie Night	f
2025-06-22 19:59:21.048244	2025-07-04 17:00:00	\N	cb0d70b4-8ac6-4045-8a77-55be2583f2a8	045fbc61-736a-4be1-baa3-070748e07f17	/uploads/event-cover-pictures/55daceaa-0a26-407d-b709-d1df1cdd91f5_cooking.jpg	Cooking together brings people closer through creativity, teamwork, and shared joy — turning simple ingredients into lasting memories.	Vienna, AT	Cooking!	f
2025-11-15 21:33:52.686221	2025-11-26 19:15:00	\N	e2540d46-4540-4223-b07c-78421260c91e	042081b2-1b0c-4759-bed6-8f54fe056130	/uploads/event-cover-pictures/f1e2868e-7f5f-401c-9b54-f24fb6717aa1_elrisitas_laughing.jpeg	Hilarious evening with a world renowned laughing coach.	Sevilla	Laughing with El Risitas	f
2025-11-16 00:53:10.518641	2025-11-21 19:00:00	\N	e2540d46-4540-4223-b07c-78421260c91e	735a5b18-55c6-4133-9b7b-4f5e47e97096	/uploads/event-cover-pictures/be32c33d-237c-4045-a9a7-0592d782f1a5_budspencer_terencehill_watschenbaum.png	Abhärtung durch das Kassieren von Stereowatschen von den professionellen Sterewatschenverteilern Bud Spencer und Terence Hill.	Reumannplatz, Wien	Am Watschenbaum rütteln mit Bud Spencer und Terence Hill	f
2025-07-11 10:38:08.360601	2025-07-12 12:00:00	\N	\N	ccc5d4bc-8d66-4d1a-87e7-a7b18b6c8773	/uploads/event-cover-pictures/d2dbe905-ee05-4b93-99e1-f438fb253c53_ozzy_bat.jpg	A delicious feast with the one and only Ozzy Osbourne	Birmingham	Bat Eating with Ozzy	t
2025-07-11 10:55:03.235106	2025-07-13 17:00:00	\N	\N	40a7f446-78e6-4383-b1cb-84d8f121011f	/uploads/event-cover-pictures/b6db941d-3c12-4519-8018-7a906e4b9bf6_bachlstmarx.jpg	Dope skate session at St. Marx skatepark	Vienna	Skateboarding St. Marx	t
\.


--
-- TOC entry 3380 (class 0 OID 319557)
-- Dependencies: 218
-- Data for Name: event_participants; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.event_participants (attended_events_id, participants_id) FROM stdin;
de32052d-645f-41d1-b43c-70621565ff7a	7767118c-19bd-4c28-8129-c0abda74b46c
de32052d-645f-41d1-b43c-70621565ff7a	cb0d70b4-8ac6-4045-8a77-55be2583f2a8
aaed8676-8b38-4c7a-b8b1-66dd683a1a96	e2540d46-4540-4223-b07c-78421260c91e
aaed8676-8b38-4c7a-b8b1-66dd683a1a96	cb0d70b4-8ac6-4045-8a77-55be2583f2a8
aaed8676-8b38-4c7a-b8b1-66dd683a1a96	0219213a-e9ce-451b-9a60-d51fa22af669
045fbc61-736a-4be1-baa3-070748e07f17	7da69d8e-55c7-4a96-ac6d-cb207e4e8a21
045fbc61-736a-4be1-baa3-070748e07f17	7767118c-19bd-4c28-8129-c0abda74b46c
045fbc61-736a-4be1-baa3-070748e07f17	cb0d70b4-8ac6-4045-8a77-55be2583f2a8
045fbc61-736a-4be1-baa3-070748e07f17	d8c038cc-4965-437f-ac37-4865ba4510dd
045fbc61-736a-4be1-baa3-070748e07f17	f18e96c7-6416-4f51-87d5-4cd229715933
\.


--
-- TOC entry 3381 (class 0 OID 319560)
-- Dependencies: 219
-- Data for Name: medium; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.medium (event_id, id, mediumuri) FROM stdin;
045fbc61-736a-4be1-baa3-070748e07f17	1e76e3cc-97d5-4aa9-8ea2-05769f6ba2b7	/uploads/event-galleries/045fbc61-736a-4be1-baa3-070748e07f17/4c1753f6-59e6-4c91-847f-937a9bcd0bfc_hulk.jpg
045fbc61-736a-4be1-baa3-070748e07f17	726d5b62-ab54-41f0-bae7-c6da1fb07ef9	/uploads/event-galleries/045fbc61-736a-4be1-baa3-070748e07f17/3c583915-7f51-4909-96da-b2a154bae1ed_therock.jpg
045fbc61-736a-4be1-baa3-070748e07f17	055fcc61-736b-8be1-baa3-080748e06f19	/uploads/event-galleries/045fbc61-736a-4be1-baa3-070748e07f17/55daceaa-0a26-407d-b709-d1df1cdd91f5_bandb.jpg
045fbc61-736a-4be1-baa3-070748e07f17	a38f22f7-d721-4dd3-b22e-0db366e0b104	/uploads/event-galleries/045fbc61-736a-4be1-baa3-070748e07f17/01fcf097-dd14-4b0a-bd82-43b6fea23141_batman.jpg
aaed8676-8b38-4c7a-b8b1-66dd683a1a96	51d1c642-f28d-41aa-81f8-16ef30da76fa	/uploads/event-galleries/aaed8676-8b38-4c7a-b8b1-66dd683a1a96/f40bf03b-c55b-4c6a-801b-9b764fc99262_tv.jpg
aaed8676-8b38-4c7a-b8b1-66dd683a1a96	3841398e-ab9a-40fe-a730-6377403cbf0c	/uploads/event-galleries/aaed8676-8b38-4c7a-b8b1-66dd683a1a96/bde7a89b-7b50-46a1-ad82-2e8901082f5b_undertaker.jpg
045fbc61-736a-4be1-baa3-070748e07f17	fd30cb25-abdf-4403-9acd-b81e13d1ffa8	/uploads/event-galleries/045fbc61-736a-4be1-baa3-070748e07f17/86be1188-ea8f-45fa-947a-77c10ff5c8d2_snoop.jpg
\.


--
-- TOC entry 3384 (class 0 OID 344064)
-- Dependencies: 222
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.role (id, name) FROM stdin;
\.


--
-- TOC entry 3382 (class 0 OID 319567)
-- Dependencies: 220
-- Data for Name: user_comment; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.user_comment (creation_date, modification_date, author_id, event_id, id, text, pictureuri) FROM stdin;
2025-10-11 09:41:05.80277	\N	7767118c-19bd-4c28-8129-c0abda74b46c	de32052d-645f-41d1-b43c-70621565ff7a	562a619b-e23b-45fe-8e82-e79aa448fcba	I like trams!	/uploads/profile-pictures/67314290-8700-4f0f-94f4-0da7ed05dbf4_gg.jpg
2025-10-11 09:58:42.903773	\N	cb0d70b4-8ac6-4045-8a77-55be2583f2a8	40a7f446-78e6-4383-b1cb-84d8f121011f	ab048699-df02-45d2-b2e6-4ca74e4fc862	Yo! I just bought a new skateboard. I'm gonna join you guys	/uploads/profile-pictures/6eaaa0c2-0e78-4171-a069-5e5fda5794d8_batman.jpg
2025-10-11 13:23:21.187355	\N	cb0d70b4-8ac6-4045-8a77-55be2583f2a8	aaed8676-8b38-4c7a-b8b1-66dd683a1a96	772b857f-3af8-4c2d-9ca6-984d73eae1f8	Batman likes to watch Batman movies because Batman knows Batman delivers the best Batman performances.	/uploads/profile-pictures/6eaaa0c2-0e78-4171-a069-5e5fda5794d8_batman.jpg
2025-10-24 11:16:56.987394	\N	7da69d8e-55c7-4a96-ac6d-cb207e4e8a21	aaed8676-8b38-4c7a-b8b1-66dd683a1a96	e4592c20-6ef7-4f67-a360-9c7835c12699	<a href="https://google.com">Google</a>	/uploads/profile-pictures/4f4c9853-29e5-4d05-95c7-d85efc034fe8_harley.jpg
2025-10-24 15:01:53.821373	\N	0219213a-e9ce-451b-9a60-d51fa22af669	de32052d-645f-41d1-b43c-70621565ff7a	4126fc42-3567-49e6-9509-ef077c87a1a6	4 touchdowns in 1 game!	/uploads/profile-pictures/ee8e0968-095d-4899-895c-d008cd994b85_al-bundy.jpg
2025-09-14 19:18:15.024199	\N	7767118c-19bd-4c28-8129-c0abda74b46c	aaed8676-8b38-4c7a-b8b1-66dd683a1a96	631ec747-5460-4657-b57b-84435b8ab4b3	hi	/uploads/profile-pictures/67314290-8700-4f0f-94f4-0da7ed05dbf4_gg.jpg
2025-07-20 16:48:43.222211	\N	7767118c-19bd-4c28-8129-c0abda74b46c	ccc5d4bc-8d66-4d1a-87e7-a7b18b6c8773	193a835b-ce74-4af6-8bda-4302b99a6f4c	Well that was a fun night!	/uploads/profile-pictures/67314290-8700-4f0f-94f4-0da7ed05dbf4_gg.jpg
2025-10-26 14:04:06.762288	\N	e2540d46-4540-4223-b07c-78421260c91e	aaed8676-8b38-4c7a-b8b1-66dd683a1a96	640c8d94-1fa6-4adb-acbf-d6e5bcab9728	SELECT * FROM users WHERE 1=1;	/uploads/profile-pictures/08305516-c382-4120-a01d-54c8208a461e_skeletor.jpg
2025-10-31 15:32:43.492789	\N	0219213a-e9ce-451b-9a60-d51fa22af669	aaed8676-8b38-4c7a-b8b1-66dd683a1a96	f8adae5c-5580-4b84-9f7b-eb6a00cc11fa	Yes it works!	/uploads/profile-pictures/ee8e0968-095d-4899-895c-d008cd994b85_al-bundy.jpg
2025-10-31 20:45:31.696369	\N	e2540d46-4540-4223-b07c-78421260c91e	aaed8676-8b38-4c7a-b8b1-66dd683a1a96	86f92040-c28a-4b64-b584-0224197f6236	SKELECT * FROM skelector;	/uploads/profile-pictures/08305516-c382-4120-a01d-54c8208a461e_skeletor.jpg
2025-07-11 19:39:34.391567	2025-09-19 15:10:29.080308	7da69d8e-55c7-4a96-ac6d-cb207e4e8a21	aaed8676-8b38-4c7a-b8b1-66dd683a1a96	34e14c80-41db-4de1-8e3f-fa7243bd0ff9	aaaaahhhhhhh!!!!	/uploads/profile-pictures/4f4c9853-29e5-4d05-95c7-d85efc034fe8_harley.jpg
\.


--
-- TOC entry 3383 (class 0 OID 319572)
-- Dependencies: 221
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.users (is_active, register_date, id, pictureuri, email, first_name, location, old_password, password, salutation, surname, username, about_me) FROM stdin;
t	2025-06-21 12:28:08.064861	7da69d8e-55c7-4a96-ac6d-cb207e4e8a21	/uploads/profile-pictures/4f4c9853-29e5-4d05-95c7-d85efc034fe8_harley.jpg	harley@haha.com	Harleen	Brooklyn, NY	\N	$2a$10$pPa/hEuxrOOfAOga7LBU4uXhL7n6zb/tHzuLHZzAeREBrGATRfH8i	Ms.	Quinzel	harley	\N
t	2025-06-21 12:48:46.048244	7767118c-19bd-4c28-8129-c0abda74b46c	/uploads/profile-pictures/67314290-8700-4f0f-94f4-0da7ed05dbf4_gg.jpg	gg@ggallin.com	GG	Lancaster, NH	\N	$2a$10$D8rKBvbxlFu6aqbGBJhO1edbYgGL61uqxnbKqEeKnvOuX4PcWZbZK	Mr.	Allin	ggallin	\N
f	2025-10-17 15:47:58.174168	0219213a-e9ce-451b-9a60-d51fa22af669	/uploads/profile-pictures/ee8e0968-095d-4899-895c-d008cd994b85_al-bundy.jpg	al@footlocker.com	Al	Chicago	\N	$2a$10$sLt2rEIC6cb/joChR3IUDutyi8nLOrb1PaxsxowuiPqa.HLcLiBM.	Mr.	Bundy	albundy	\N
t	2025-06-21 11:04:07.308963	cb0d70b4-8ac6-4045-8a77-55be2583f2a8	/uploads/profile-pictures/6eaaa0c2-0e78-4171-a069-5e5fda5794d8_batman.jpg	batman@batcave.com	Bruce	Gotham City, NJ	\N	$2a$10$5w1WYzs.b9TG2owTTE6c2eKgbsuJ3UuDlLYhdsOrC4RPIiZBxOzBC	Mr.	Wayne	batman	\N
f	2025-07-11 18:18:58.15966	91740f77-0b27-4db8-a4b8-5b2b62a25664	/uploads/profile-pictures/911ae559-2c12-44d3-bd50-9b556e6d3885_franzi.jpg	fuenfer@wienerlinien.at	Franzi	Wien	\N	$2a$10$oN8WOlONNLGwn9uRRfId3OqMsQzoNgkrV2PsSNqKPCOgA21RUJy0i	Mr.	Mayerhofer	5er	\N
t	2025-06-22 17:07:37.69455	a4235f35-d4b9-4d31-b4f1-91b8a6436d98	/uploads/profile-pictures/c0e1d8e9-b9d1-4060-a893-79b148366010_eltonjohn.jpg	elton@john.co.uk	Elton	London	\N	$2a$10$oN8WOlONNLGwn9uRRfId3OqMsQzoNgkrV2PsSNqKPCOgA21RUJy0i	Mr.	John	sireltonjohn	\N
f	2025-07-06 23:59:05.635171	f18e96c7-6416-4f51-87d5-4cd229715933	/uploads/profile-pictures/f18e96c7-6416-4f51-87d5-4cd229715933_blackknight.jpg	knight@black.co.uk	Black	Wales	\N	$2a$10$oN8WOlONNLGwn9uRRfId3OqMsQzoNgkrV2PsSNqKPCOgA21RUJy0i	Mr.	Knight	blackknight	\N
f	2025-09-19 19:18:36.430076	e2540d46-4540-4223-b07c-78421260c91e	/uploads/profile-pictures/138e74d0-71b1-430a-92da-0943ae388170_skeletor2.jpg	skeletor@mastersoftheuniverse.com	Skele	Universe	\N	$2a$10$kdjhrp1BNqcqlGdP.UpAiejEq0TxaqwO2YF1s6PCl5P4Vpp1jeRy2	Mr.	Tor	skeletor	I am the mighty Skeletor!
f	2025-10-28 00:25:47.844324	7991fed0-9b75-4d9c-ae0f-5c385217f4f1	/uploads/profile-pictures/988b72ec-7058-4e92-b197-7389898dc355_risitas.jpg	elrisitas@laughing.es	Juan Joya	Sevilla	\N	$2a$10$nOrknU377GfYATpEuf0kSeDM1OJNm8im8PQQU258pccJrCnyFy0VW	Señor	Borja	elrisitas	Hahahaha!
f	2025-07-04 15:38:01.15607	01a26044-6c60-40b6-a449-c72b0d240503	/uploads/profile-pictures/ab23a9fa-a782-47f8-ab10-bd612316efb8_ozzy.jpg	ozzy@blacksabbath.co.uk	Ozzy	Birmingham	\N	$2a$10$oN8WOlONNLGwn9uRRfId3OqMsQzoNgkrV2PsSNqKPCOgA21RUJy0i	Mr.	Osbourne	bateater	\N
f	2025-07-04 15:40:49.970751	f75d02b0-ca03-4c0d-af93-acae8aea85f7	/uploads/profile-pictures/bcf033ff-550f-49c4-9159-41ae727b1e02_HarryP.jpg	potter@gmail.com	Harry	Hogwards	\N	$2a$10$oN8WOlONNLGwn9uRRfId3OqMsQzoNgkrV2PsSNqKPCOgA21RUJy0i	Mr.	Potter	HarryP	\N
f	2025-07-06 23:47:48.970154	9d6fa8e4-fd6d-4c25-9439-8ee91077cf47	/uploads/profile-pictures/0d317296-297b-4108-aa10-ab24a7553d9e_ninahagen.jpg	nina@hagen.de	Nina	Berlin	\N	$2a$10$oN8WOlONNLGwn9uRRfId3OqMsQzoNgkrV2PsSNqKPCOgA21RUJy0i	Ms.	Hagen	ninahagen	\N
f	2025-07-06 23:54:56.253414	d8c038cc-4965-437f-ac37-4865ba4510dd	/uploads/profile-pictures/a8ea86eb-dc39-4742-8a7e-1808f4f48c75_Alex_DeLarge.jpg	alex@clockwork.com	Alex	London	\N	$2a$10$oN8WOlONNLGwn9uRRfId3OqMsQzoNgkrV2PsSNqKPCOgA21RUJy0i	Mr.	DeLarge	alexlikesmolokoplus	\N
f	2025-07-07 00:04:49.973131	3fb77b1c-8670-40a2-929b-2b021f6e3e61	/uploads/profile-pictures/0c6e58ad-9426-46ef-8762-b8050317485e_waynearnold.jpg	wayne@arnold.com	Wayne	Sunnyville	\N	$2a$10$oN8WOlONNLGwn9uRRfId3OqMsQzoNgkrV2PsSNqKPCOgA21RUJy0i	Mr.	Arnold	wayne	\N
f	2025-10-11 00:31:55.417063	573cb207-ea43-49f4-add2-89e078772908	/uploads/profile-pictures/00ea7946-79aa-4c38-8206-deaa972e3958_breitfuss.jpg	breitfuss@ma2412.at	Engelbert	Vienna	\N	$2a$10$oN8WOlONNLGwn9uRRfId3OqMsQzoNgkrV2PsSNqKPCOgA21RUJy0i	Ing.	Breitfuß	Bertl	\N
f	2025-10-11 01:21:45.8209	6b533028-27ca-4e5d-974a-5f89eca76f1d	/uploads/profile-pictures/188ec08d-40fb-48ec-a02f-355402292b38_hercules.jpg	hercules@olympia.gr	Hercules	New York	\N	$2a$10$oN8WOlONNLGwn9uRRfId3OqMsQzoNgkrV2PsSNqKPCOgA21RUJy0i	Mr.	Herakles	hercules	\N
f	2025-11-15 12:34:57.23755	129d2530-228c-4da1-b89c-3189fc76f666	/uploads/profile-pictures/75b3ac4b-4140-4439-8efd-b9185a69aefc_snoop.jpg	snoopdogg@deathrow.com	Calvin	Long Beach, CA	\N	$2a$10$yPG3MxaRKdvG6.hL/35al.u3hrv.VRGDfk5p/d00h8vHQVpKAEpq.	Mr.	Broadus	snoopdogg	\N
\.


--
-- TOC entry 3385 (class 0 OID 344069)
-- Dependencies: 223
-- Data for Name: users_roles; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.users_roles (users_id, roles_id) FROM stdin;
\.


--
-- TOC entry 3392 (class 0 OID 0)
-- Dependencies: 224
-- Name: role_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.role_seq', 1, false);


--
-- TOC entry 3213 (class 2606 OID 319556)
-- Name: event event_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);


--
-- TOC entry 3215 (class 2606 OID 319566)
-- Name: medium medium_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.medium
    ADD CONSTRAINT medium_pkey PRIMARY KEY (id);


--
-- TOC entry 3223 (class 2606 OID 344068)
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);


--
-- TOC entry 3217 (class 2606 OID 319571)
-- Name: user_comment user_comment_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.user_comment
    ADD CONSTRAINT user_comment_pkey PRIMARY KEY (id);


--
-- TOC entry 3219 (class 2606 OID 319578)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3225 (class 2606 OID 344073)
-- Name: users_roles users_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users_roles
    ADD CONSTRAINT users_roles_pkey PRIMARY KEY (users_id, roles_id);


--
-- TOC entry 3221 (class 2606 OID 319580)
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- TOC entry 3232 (class 2606 OID 344075)
-- Name: users_roles fk15d410tj6juko0sq9k4km60xq; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users_roles
    ADD CONSTRAINT fk15d410tj6juko0sq9k4km60xq FOREIGN KEY (roles_id) REFERENCES public.role(id);


--
-- TOC entry 3226 (class 2606 OID 319581)
-- Name: event fk1h6eb0wh6dq1j6h52570b4keg; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT fk1h6eb0wh6dq1j6h52570b4keg FOREIGN KEY (creator_id) REFERENCES public.users(id);


--
-- TOC entry 3229 (class 2606 OID 319596)
-- Name: medium fk3w1fuk3erkwy3d8nyiwenjx0t; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.medium
    ADD CONSTRAINT fk3w1fuk3erkwy3d8nyiwenjx0t FOREIGN KEY (event_id) REFERENCES public.event(id);


--
-- TOC entry 3230 (class 2606 OID 319601)
-- Name: user_comment fk6sgvqspyk2p1ktxdtxktpjers; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.user_comment
    ADD CONSTRAINT fk6sgvqspyk2p1ktxdtxktpjers FOREIGN KEY (author_id) REFERENCES public.users(id);


--
-- TOC entry 3227 (class 2606 OID 319586)
-- Name: event_participants fk8gnffqcvvxcfijv2ycdpnsarq; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.event_participants
    ADD CONSTRAINT fk8gnffqcvvxcfijv2ycdpnsarq FOREIGN KEY (participants_id) REFERENCES public.users(id);


--
-- TOC entry 3231 (class 2606 OID 319606)
-- Name: user_comment fk9u2m2s1qjbpckok3lbxktg75b; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.user_comment
    ADD CONSTRAINT fk9u2m2s1qjbpckok3lbxktg75b FOREIGN KEY (event_id) REFERENCES public.event(id);


--
-- TOC entry 3233 (class 2606 OID 344080)
-- Name: users_roles fkml90kef4w2jy7oxyqv742tsfc; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users_roles
    ADD CONSTRAINT fkml90kef4w2jy7oxyqv742tsfc FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- TOC entry 3228 (class 2606 OID 319591)
-- Name: event_participants fkoxwssrwow02cmts1jd3nauvxa; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.event_participants
    ADD CONSTRAINT fkoxwssrwow02cmts1jd3nauvxa FOREIGN KEY (attended_events_id) REFERENCES public.event(id);


--
-- TOC entry 2069 (class 826 OID 16392)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO neon_superuser WITH GRANT OPTION;


--
-- TOC entry 2068 (class 826 OID 16391)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON TABLES TO neon_superuser WITH GRANT OPTION;


-- Completed on 2025-11-16 10:53:43

--
-- PostgreSQL database dump complete
--

