/* ============================================================
   LuxAuto — catalog.js
   Car catalog: 50 Premium Vehicles, filter by class, search by name, modal windows
   ============================================================ */

(function () {
  'use strict';

  /* ── Car Data (50 Premium Vehicles with Full Specs & Authentic HD Photos) ── */
  const CARS = [
    /* ── 1-13: БІЗНЕС-КЛАС ── */
    {
      id: 1,
      name: 'Rolls-Royce Ghost',
      class: 'Бізнес',
      classEn: 'Business',
      price: 10000,
      seats: 5,
      power: 571,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '6.75L V12 Twin Turbo',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Rolls-Royce_Ghost_II_IAA_2021_1X7A0008.jpg',
      desc: 'Rolls-Royce Ghost — абсолютна вершина автомобільної розкоші. Ручна праця майстрів Goodwood, абсолютна тиша та бездоганна елегантність.',
      descEn: 'Rolls-Royce Ghost — the absolute pinnacle of automotive luxury. Handcrafted by Goodwood artisans, silence, and flawless elegance.',
      features: ['Зоряне небо Starlight Headliner', 'Шкіра ручного вичинення Bespoke', 'Акустична система Bespoke Audio', 'Підвіска Planar Suspension ("Килим-літак")', 'Двері з електроприводом та дотяжкою']
    },
    {
      id: 2,
      name: 'Rolls-Royce Phantom VIII',
      class: 'Бізнес',
      classEn: 'Business',
      price: 14000,
      seats: 5,
      power: 571,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '6.75L V12 Twin Turbo',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Rolls-Royce_Phantom_VIII_Genf_2018.jpg',
      desc: 'Флагманський монумент Rolls-Royce. Неперевершений рівень шумоізоляції з понад 130 кг ізоляційних матеріалів та галерея The Gallery на передній панелі.',
      descEn: 'The flagship monument of Rolls-Royce. Unrivaled soundproofing with over 130 kg of insulation and The Gallery bespoke dashboard display.',
      features: ['Індивідуальна скляна арт-галерея The Gallery', 'Електрошторки для задніх пасажирів', 'Килимки з натуральної овечої вовни', 'Масажні крісла зі спинкою, що нахиляється', 'Холодильник для напоїв із келихами']
    },
    {
      id: 3,
      name: 'Bentley Continental GT',
      class: 'Бізнес',
      classEn: 'Business',
      price: 7500,
      seats: 4,
      power: 659,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '6.0L W12 Twin Turbo',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bentley_Continental_GT_%283rd_gen.%29_Azure_1X7A6807.jpg',
      desc: 'Британський гран-туризмо ручної роботи. Поєднання найвишуканіших матеріалів, ромбоподібної прошивки та запаморочливої динаміки.',
      descEn: 'British handcrafted grand tourer. A combination of the finest materials, diamond quilting, and breathtaking dynamics.',
      features: ['Поворотний дисплей Bentley Rotating Display', 'Преміум акустика Naim for Bentley 2200W', 'Активне стабілізування кренів 48V', 'Масаж та вентиляція сидінь', 'Оздоблення шпоном темного горіха']
    },
    {
      id: 4,
      name: 'Bentley Flying Spur Mulliner',
      class: 'Бізнес',
      classEn: 'Business',
      price: 9000,
      seats: 5,
      power: 635,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '6.0L W12 Twin Turbo',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Bentley_Flying_Spur_W12_Speed_%282019%29_1X7A1636.jpg',
      desc: 'Найрозкішніший седан від Bentley у спецверсії Mulliner. Повнокероване шасі, решітка Double Diamond та статуетка Flying B з підсвіткою.',
      descEn: 'The most luxurious sedan by Bentley in Mulliner specification. All-wheel steering, Double Diamond grille, and illuminated Flying B.',
      features: ['Висувна статуетка Flying B з кришталевим підсвічуванням', '3D ромбоподібна шкіра дверних карт', 'Складні столики з електроприводом', 'Сенсорний пульт керування Touch Screen Remote', 'Атермальне подвійне скління']
    },
    {
      id: 5,
      name: 'Mercedes-Maybach S 680',
      class: 'Бізнес',
      classEn: 'Business',
      price: 9500,
      seats: 4,
      power: 612,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '6.0L V12 BiTurbo',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Mercedes-Maybach_Z223_680_1X7A5831.jpg',
      desc: 'Вершина німецького представницького класу з легендарним мотором V12. Подовжена база, роздільні крісла First Class та виняткова тиша.',
      descEn: 'The pinnacle of German executive class with a legendary V12. Extended wheelbase, First Class rear seats, and serene silence.',
      features: ['Двоколірне фірмове фарбування кузова', 'Крісла-оттоманки з підігрівом шиї та плечей', 'Акустика Burmester High-End 4D Surround', 'Активне шумозаглушення салону', 'Срібні келихи для шампанського Robbe & Berking']
    },
    {
      id: 6,
      name: 'Mercedes-Benz S-Class',
      class: 'Бізнес',
      classEn: 'Business',
      price: 4500,
      seats: 5,
      power: 435,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '3.0L I6 Turbo + EQ Boost',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Mercedes-Benz_W223_IMG_3969.jpg',
      desc: 'Флагманський седан Mercedes-Benz нового покоління W223 — еталон комфорту та інновацій. Ідеальний вибір для ділових поїздок та урочистих зустрічей.',
      descEn: 'The flagship Mercedes-Benz W223 sedan — the gold standard of comfort and innovation. Ideal for business and VIP events.',
      features: ['Кермування задньою віссю 10°', '3D цифрова панель приладів з доповненою реальністю', 'Оздоблення шкірою Nappa Exclusive', 'Пневматична підвіска AIRMATIC', 'Інтелектуальні фари Digital Light']
    },
    {
      id: 7,
      name: 'BMW 7 Series (760i)',
      class: 'Бізнес',
      classEn: 'Business',
      price: 4500,
      seats: 5,
      power: 544,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '4.4L V8 TwinPower Turbo',
      year: 2024,
      icon: '🚗',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/BMW_G70_740d_1X7A7230.jpg',
      desc: 'Нове флагманське покоління BMW G70 з футуристичним дизайном, монументальною решіткою Iconic Glow та персональним кінотеатром для пасажирів.',
      descEn: 'New generation 7 Series G70 with futuristic design, Iconic Glow kidney grille, and theater screen for rear passengers.',
      features: ['31.3-дюймовий стельовий екран BMW Theatre Screen 8K', 'Підсвітка контуру решітки Iconic Glow', 'Аудіосистема Bowers & Wilkins Diamond', 'Автоматичні двері з сенсорним відкриванням', 'Кришталеві органи керування CraftedClarity']
    },
    {
      id: 8,
      name: 'BMW 8 Series Gran Coupe',
      class: 'Бізнес',
      classEn: 'Business',
      price: 4800,
      seats: 5,
      power: 530,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '4.4L V8 M TwinPower',
      year: 2024,
      icon: '🚗',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/BMW_G16_at_IAA_2019_IMG_0623.jpg',
      desc: 'Чотиридверне спортивне гран-купе з динамічним атлетичним силуетом, панорамним дахом та фірмовим драйверським характером BMW M.',
      descEn: 'Four-door sport gran coupe with athletic proportions, panoramic roof, and signature BMW M driver engagement.',
      features: ['Панорамний скляний дах Sky Lounge', 'Спортивний вихлоп M Sport', 'Диференціал M Sport з електронним блокуванням', 'Адаптивна підвіска Adaptive M Professional', 'Шкіряний салон BMW Individual Merino']
    },
    {
      id: 9,
      name: 'Audi A8 L Horch',
      class: 'Бізнес',
      classEn: 'Business',
      price: 5000,
      seats: 4,
      power: 460,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '4.0L V8 Biturbo TFSI',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Audi_A8_L_Horch_001.jpg',
      desc: 'Ексклюзивна подовжена версія флагмана Audi під історичним преміальним суббрендом Horch. Максимальний простір та релакс для заднього пасажира.',
      descEn: 'Exclusive extended version of Audi flagship under the historic Horch heritage brand. Maximum space and rear-seat relaxation.',
      features: ['Подовжена на 13 см колісна база', 'Крісло Relaxation з масажем стоп пасажира', 'Хромований ексклюзивний декор решітки Horch', 'Аудіосистема Bang & Olufsen 3D Advanced 1920W', 'Пневматична підвіска з предиктивним скануванням дороги']
    },
    {
      id: 10,
      name: 'Maserati Quattroporte Trofeo',
      class: 'Бізнес',
      classEn: 'Business',
      price: 5500,
      seats: 5,
      power: 580,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '3.8L V8 Twin Turbo (by Ferrari)',
      year: 2024,
      icon: '🚗',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Maserati_Quattroporte_VI_Trofeo_1X7A7422.jpg',
      desc: 'Італійський представницький седан із чистокровним серцем Ferrari. 580-сильний V8, неповторний тембр вихлопу та розкішна шкіра Pieno Fiore.',
      descEn: 'Italian executive sedan with a pure Ferrari-built heart. 580-hp V8, unforgettable exhaust acoustic, and Pieno Fiore full-grain leather.',
      features: ['Двигун збірки заводу Ferrari у Маранелло', 'Преміальна натуральна шкіра Pieno Fiore', 'Оздоблення салону матовим карбоном', 'Спортивний режим Corsa з Launch Control', 'Аудіосистема Bowers & Wilkins Surround']
    },
    {
      id: 11,
      name: 'Porsche Panamera Turbo S E-Hybrid',
      class: 'Бізнес',
      classEn: 'Business',
      price: 6500,
      seats: 4,
      power: 700,
      transmission: 'Автомат PDK',
      transmissionEn: 'Automatic PDK',
      engine: '4.0L V8 Biturbo + Електро',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Porsche_Panamera_Turbo_S_%2815490638810%29.jpg',
      desc: 'Гібридний флагманський фастбек сумарною потужністю 700 к.с. Блискавичне прискорення суперкара у поєднанні з комфортом першого класу.',
      descEn: 'Hybrid flagship fastback delivering 700 hp combined. Supercar acceleration blended with executive first-class comfort.',
      features: ['Керамічні гальма Porsche Ceramic Composite (PCCB)', 'Система стабілізації кренів PDCC Sport', 'Керована задня вісь з підрулюванням', '4-зонний клімат-контроль із сенсорними екранами', 'Адаптивний 4-позиційний задній спойлер']
    },
    {
      id: 12,
      name: 'Lexus LS 500h F-Sport',
      class: 'Бізнес',
      classEn: 'Business',
      price: 4000,
      seats: 5,
      power: 359,
      transmission: 'Автомат Multi-Stage',
      transmissionEn: 'Automatic Multi-Stage',
      engine: '3.5L V6 Multi-Stage Hybrid',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Lexus_LS_500_F_SPORT_%283BA-VXFA50-AEUQT%28F%29%29_front.jpg',
      desc: 'Японська вершина гостинності Омотенаші у спортивній комплектації F-Sport. Плавний безшумний гібридний хід та візерункове гравіроване скло Kiriko.',
      descEn: 'Japanese pinnacle of Omotenashi hospitality in F-Sport trim. Smooth silent hybrid operation and handcrafted Kiriko cut glass.',
      features: ['Оздоблення дверних панелей склом Kiriko Cut Glass', 'Аудіосистема Mark Levinson QLI Reference 3D (23 динаміки)', 'Спортивні сидіння F-Sport з 28 напрямками регулювань', 'Пневмопідвіска з полегшеною посадкою пасажирів', 'Фари BladeScan Type AHS']
    },
    {
      id: 13,
      name: 'Genesis G90 Long Wheelbase',
      class: 'Бізнес',
      classEn: 'Business',
      price: 4200,
      seats: 4,
      power: 415,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '3.5L V6 E-Supercharger 48V',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Genesis_G90_LWB_3.5T_48V_RS4_Maui_Black_%285%29.jpg',
      desc: 'Азійський преміум-лідер у версії LWB із подовженою базою. Двоповерхова світлодіодна оптика Two-Line, крісла Ergo Relaxing та мультиконтурне спа-сидіння.',
      descEn: 'Asian premium flagship in extended LWB specification. Two-Line LED architecture, Ergo Relaxing massage seats, and multi-chamber air suspension.',
      features: ['Подовжена на 19 см база для простору позаду', 'Мультиконтурні задні крісла з функцією масажу та підставкою для ніг', 'Багатокамерна пневмопідвіска Multi-Chamber Air', 'Аудіосистема Bang & Olufsen 3D з віртуальними акустичними залами', 'Електропривод зачинення дверей EasyClose']
    },

    /* ── 14-27: СПОРТКАРИ & СУПЕРКАРИ ── */
    {
      id: 14,
      name: 'Bugatti Chiron Sport',
      class: 'Спорт',
      classEn: 'Sport',
      price: 25000,
      seats: 2,
      power: 1500,
      transmission: 'Робот DSG',
      transmissionEn: 'Dual-Clutch DSG',
      engine: '8.0L W16 Quad-Turbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Bugatti_Chiron_Sport_Genf_2018.jpg',
      desc: 'Король інженерії та абсолютний рекордсмен швидкості. 1500 кінських сил, 16 циліндрів, 4 турбіни та максимальна швидкість понад 420 км/год.',
      descEn: 'The king of engineering and pinnacle of speed. 1,500 horsepower, 16 cylinders, 4 turbochargers, and a top speed over 420 km/h.',
      features: ['Карбонові склоочисники (вперше у світі)', '4-ствольний титановий вихлоп', 'Титанові гальмівні супорти, надруковані на 3D-принтері', 'Вуглепластикове монококове шасі підвищеної жорсткості', 'Активне аеродинамічне гальмо Airbrake']
    },
    {
      id: 15,
      name: 'Ferrari SF90 Stradale',
      class: 'Спорт',
      classEn: 'Sport',
      price: 14000,
      seats: 2,
      power: 1000,
      transmission: 'Робот F1 DCT',
      transmissionEn: 'Dual-Clutch F1 DCT',
      engine: '4.0L V8 Twin Turbo + 3 Електромотори',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Ferrari_SF90_Stradale.jpg',
      desc: 'Найпотужніший серійний гіперкар Ferrari з плагін-гібридною системою. 1000 к.с., повний привід RAC-e та катапультний розгін 0-100 за 2.5 секунди.',
      descEn: 'The most powerful production Ferrari hypercar with plug-in hybrid architecture. 1,000 hp, RAC-e AWD, and 0-100 km/h in 2.5 seconds.',
      features: ['Розгін 0-100 км/год за 2.5 секунди', 'Система керування вектором тяги RAC-e', 'Запатентоване активне антикрило Shut-off Gurney', 'Цифровий вигнутий 16-дюймовий дисплей кокпіта', 'Кермо eManettino з сенсорним керуванням']
    },
    {
      id: 16,
      name: 'Lamborghini Aventador SVJ',
      class: 'Спорт',
      classEn: 'Sport',
      price: 15000,
      seats: 2,
      power: 770,
      transmission: 'Робот ISR',
      transmissionEn: 'Robotized ISR',
      engine: '6.5L V12 Атмосферний',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Lamborghini_Aventador_SVJ_63_London.jpg',
      desc: 'Superveloce Jota — легендарний рекордсмен Нюрбургринга з диким атмосферним V12 на 770 сил, дверима-гільйотинами та активною аеродинамікою ALA 2.0.',
      descEn: 'Superveloce Jota — legendary Nurburgring record holder with raw 770 hp naturally aspirated V12, scissor doors, and ALA 2.0 active aero.',
      features: ['Активна аеродинаміка Aerodinamica Lamborghini Attiva (ALA 2.0)', 'Фірмові двері, що відкриваються догори (Scissor Doors)', 'Титанові впускні клапани двигуна V12', 'Повнокероване шасі Lamborghini Dynamic Steering (LDS)', 'Карбонові анатомічні крісла-ковші']
    },
    {
      id: 17,
      name: 'Ferrari Roma',
      class: 'Спорт',
      classEn: 'Sport',
      price: 8000,
      seats: 4,
      power: 620,
      transmission: 'Робот F1 DCT',
      transmissionEn: 'Dual-Clutch F1 DCT',
      engine: '3.9L V8 Biturbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Ferrari_Roma.jpg',
      desc: 'Ferrari Roma — витончене гран-туризмо у філософії «La Nuova Dolce Vita». Неперевершена італійська елегантність, 620 к.с. та драйв.',
      descEn: 'Ferrari Roma — sophisticated grand tourer embracing «La Nuova Dolce Vita». Unsurpassed Italian elegance, 620 hp, and exhilarating drive.',
      features: ['Кокпіт Dual Cockpit для водія та пасажира', '8-ступенева коробка передач F1 з подвійним зчепленням', 'Система Side Slip Control 6.0', 'Матричні світлодіодні фари', 'Висувний мобільний задній спойлер']
    },
    {
      id: 18,
      name: 'Ferrari F8 Tributo',
      class: 'Спорт',
      classEn: 'Sport',
      price: 11000,
      seats: 2,
      power: 720,
      transmission: 'Робот F1 DCT',
      transmissionEn: 'Dual-Clutch F1 DCT',
      engine: '3.9L V8 Twin Turbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Ferrari_F8_Tributo_Genf_2019_1Y7A5666.jpg',
      desc: 'Середньомоторний шедевр, присвячений найкращому V8 у світі за версією Engine of the Year. 720 кінських сил та гоночна аеродинаміка S-Duct.',
      descEn: 'Mid-engine masterpiece honoring the best V8 in the world by Engine of the Year awards. 720 hp and F1-derived S-Duct aerodynamics.',
      features: ['Аеродинамічний тунель S-Duct на капоті (+15% притискної сили)', 'Прозоре жалюзійне вікно з Lexan над двигуном', 'Ferrari Dynamic Enhancer (FDE+)', 'Полегшене титанове шасі та диски', 'Кермо з інтегрованими LED-індикаторами перемикання передач']
    },
    {
      id: 19,
      name: 'McLaren 720S Spider',
      class: 'Спорт',
      classEn: 'Sport',
      price: 12000,
      seats: 2,
      power: 720,
      transmission: 'Робот SSG',
      transmissionEn: 'Dual-Clutch SSG',
      engine: '4.0L V8 Twin Turbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/McLaren_720S_Spider_Genf_2019_1Y7A5679.jpg',
      desc: 'Суперкар з вуглепластиковим монококом Monocage II-S та найшвидшим у класі електроприводним жорстким дахом (11 секунд). Розгін 0-100 за 2.9 с.',
      descEn: 'Supercar with carbon fibre Monocage II-S tub and the fastest folding hardtop in its class (11 seconds). 0-100 km/h in 2.9 seconds.',
      features: ['Карбоновий монокок Monocage II-S', 'Електрохромний скляний дах зі змінним затемненням', 'Двері двогранного відкривання (Dihedral Doors)', 'Гідравлічна підвіска Proactive Chassis Control II', 'Складана цифрова приладова панель Folding Driver Display']
    },
    {
      id: 20,
      name: 'McLaren 765LT',
      class: 'Спорт',
      classEn: 'Sport',
      price: 16000,
      seats: 2,
      power: 765,
      transmission: 'Робот SSG',
      transmissionEn: 'Dual-Clutch SSG',
      engine: '4.0L V8 Twin Turbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/2020_McLaren_765LT.jpg',
      desc: 'Лімітований трековий снаряд серії Longtail. 765 кінських сил, екстремальне зниження ваги на 80 кг та 4-ствольний титановий вихлоп.',
      descEn: 'Limited-edition track monster from the Longtail lineage. 765 hp, 80 kg weight reduction, and quad-exit full titanium exhaust.',
      features: ['Подовжене активне заднє антикрило Longtail Airbrake', 'Чотириствольна титанова вихлопна система', 'Карбон-керамічні гальма від гіперкара McLaren Senna', 'Полікарбонатні вікна motorsport-класу', 'Ковані надлегкі диски з шинами Pirelli P Zero Trofeo R']
    },
    {
      id: 21,
      name: 'Aston Martin DBS Superleggera',
      class: 'Спорт',
      classEn: 'Sport',
      price: 9500,
      seats: 4,
      power: 725,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '5.2L V12 Twin Turbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Aston_Martin_DBS_Superleggera_1X7A0207.jpg',
      desc: 'Флагманський супер-гран-туризмо з кузовом із вуглепластику. 725 кінських сил, 900 Нм крутного моменту та неперевершений британський стиль Джеймса Бонда.',
      descEn: 'Flagship super grand tourer sculpted in carbon fibre. 725 hp, 900 Nm of torque, and James Bond sophisticated British bravura.',
      features: ['Кузовні панелі з вуглецевого волокна Superleggera', 'Аеродинамічний спойлер Aeroblade II', 'Вуглецево-керамічні гальма діаметром 410 мм', 'Шкіряний салон з вишивкою Geometrical Quilt', 'Аудіосистема Bang & Olufsen BeoSound']
    },
    {
      id: 22,
      name: 'Aston Martin Vantage V12',
      class: 'Спорт',
      classEn: 'Sport',
      price: 8500,
      seats: 2,
      power: 700,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '5.2L V12 Twin Turbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/2022_Aston_Martin_Vantage_V12.jpg',
      desc: 'Фінальна та найпотужніша версія компактного Vantage з мотором V12. 700 кінських сил у компактному маневреному шасі з розширеною колією.',
      descEn: 'The final and most powerful compact Vantage fitted with a 700 hp V12. Widebody stance and unfiltered analog agility.',
      features: ['Розширений на 40 мм кузов widebody', 'Карбоновий капот у формі підкови з вентиляцією', 'Фіксоване заднє антикрило (+204 кг притиску)', 'Карбон-кевларові гоночні сидіння', 'Диференціал підвищеного тертя на задній осі']
    },
    {
      id: 23,
      name: 'Porsche 911 Carrera 4S',
      class: 'Спорт',
      classEn: 'Sport',
      price: 5000,
      seats: 4,
      power: 450,
      transmission: 'Робот PDK',
      transmissionEn: 'Dual-Clutch PDK',
      engine: '3.0L Boxer Biturbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Porsche_992_Carrera_4S_Genf_2019_1Y7A5561.jpg',
      desc: 'Ікона спорткарів у повнопривідній модифікації Carrera 4S (покоління 992). 450 к.с., опозитний бітурбо-двигун та фірмовий пакет Sport Chrono.',
      descEn: 'Sportscar icon in all-wheel-drive Carrera 4S guise (992 generation). 450 hp flat-six biturbo and signature Sport Chrono package.',
      features: ['Пакет Sport Chrono з перемикачем режимів на кермі', 'Інтелектуальний повний привід Porsche Traction Management (PTM)', 'Спортивна вихлопна система з чорними патрубками', 'Спортивні адаптивні сидіння Plus з 18 регулюваннями', 'Режим Wet Mode для впевненого водіння на мокрій дорозі']
    },
    {
      id: 24,
      name: 'Porsche 911 GT3 RS (992)',
      class: 'Спорт',
      classEn: 'Sport',
      price: 13000,
      seats: 2,
      power: 525,
      transmission: 'Робот PDK',
      transmissionEn: 'Dual-Clutch PDK',
      engine: '4.0L Boxer Атмосферний',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/2022_Porsche_911_%28992%29_GT3_RS.jpg',
      desc: 'Чистокровний трековий снаряд з активним антикрилом DRS, як у болідах Формули-1. 525 кінських сил, що розкручуються до запаморочливих 9000 об/хв.',
      descEn: 'Purebred track weapon featuring Formula 1-style active DRS rear wing. 525 hp revving to a staggering 9,000 RPM.',
      features: ['Система зниження лобового опору DRS (Drag Reduction System)', 'Карбонові двері, крила, дах та антикрило', 'Чотири обертові селектори налаштування шасі на кермі', 'Центральний радіатор від гоночного 911 RSR', 'Ковані магнієві диски з центральним замком']
    },
    {
      id: 25,
      name: 'Porsche Taycan Turbo S',
      class: 'Спорт',
      classEn: 'Sport',
      price: 5500,
      seats: 4,
      power: 761,
      transmission: 'Автомат 2-ступ.',
      transmissionEn: 'Automatic 2-speed',
      engine: 'Електро (2 мотори AWD)',
      year: 2024,
      icon: '⚡',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Porsche_Taycan_Turbo_S_%2848769973948%29.jpg',
      desc: 'Електричний флагман Porsche з потужністю до 761 к.с. у режимі Launch Control. 1050 Нм крутного моменту та блискавична 800-вольтова архітектура.',
      descEn: 'Porsche all-electric flagship producing 761 hp in Launch Control overboost. 1,050 Nm torque and rapid 800-volt charging architecture.',
      features: ['Розгін 0-100 км/год за 2.8 секунди з контролем старту', 'Гальма Porsche Ceramic Composite Brake (PCCB)', 'Керована задня вісь із підрулюванням', 'Три дисплеї на передній панелі, включаючи екран пасажира', 'Спортивний звук електромотора Porsche Electric Sport Sound']
    },
    {
      id: 26,
      name: 'Audi R8 V10 Performance',
      class: 'Спорт',
      classEn: 'Sport',
      price: 6500,
      seats: 2,
      power: 620,
      transmission: 'Робот S Tronic',
      transmissionEn: 'Dual-Clutch S Tronic',
      engine: '5.2L V10 FSI Атмосферний',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/R8_Coupe_V10_performance-1.jpg',
      desc: 'Культовий середньомоторний суперкар із атмосферним V10, спільним із Lamborghini Huracán. Повний привід quattro та неперевершений голос двигуна.',
      descEn: 'Iconic mid-engine supercar with a naturally aspirated V10 shared with the Lamborghini Huracán. quattro AWD and acoustic fireworks.',
      features: ['Лазерне дальнє світло Audi Laser Light', 'Карбон-керамічна гальмівна система', 'Фіксоване карбонове антикрило Performance', 'Кокпіт Audi Virtual Cockpit з трековим режимом', 'Спортивна вихлопна система з чорними овальними патрубками']
    },
    {
      id: 27,
      name: 'Chevrolet Corvette C8 Z06',
      class: 'Спорт',
      classEn: 'Sport',
      price: 6000,
      seats: 2,
      power: 670,
      transmission: 'Робот Tremec DCT',
      transmissionEn: 'Dual-Clutch Tremec DCT',
      engine: '5.5L V8 LT6 Flat-Plane',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/2023_Chevrolet_Corvette_Z06.jpg',
      desc: 'Американський середньомоторний екзотик із найбільш високооборотним атмосферним V8 у серійному виробництві (8600 об/хв). 670 кінських сил та європейський тембр.',
      descEn: 'American mid-engine exotic powered by the highest horsepower naturally aspirated production V8 (8,600 RPM redline). 670 hp.',
      features: ['Двигун LT6 з плоским колінчастим валом (Flat-Plane Crank)', 'Центральне 4-трубне вихлопне сопло зі спеціальними відбивачами звуку', 'Магнітореологічна підвіска Magnetic Selective Ride Control 4.0', 'Широкий кузов Z06 з повітрозабірниками', 'Знімний жорсткий дах targa']
    },

    /* ── 28-39: ПРЕМІУМ SUV & ПОЗАШЛЯХОВИКИ ── */
    {
      id: 28,
      name: 'Rolls-Royce Cullinan',
      class: 'SUV',
      classEn: 'SUV',
      price: 12000,
      seats: 5,
      power: 571,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '6.75L V12 Twin Turbo',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg',
      desc: 'Найрозкішніший позашляховик планети. Пневмопідвіска Magic Carpet Ride, абсолютна ізоляція від зовнішнього світу та монументальна постава Rolls-Royce.',
      descEn: 'The most opulent SUV on the planet. Magic Carpet Ride air suspension, peerless soundproofing, and monumental Rolls-Royce presence.',
      features: ['Висувні оглядові крісла Viewing Suite у багажнику', 'Скляна перегородка між салоном та багажним відділенням', 'Повний привід та повнокероване шасі 4WS', 'Килими з натуральної вовни та шкіра ручного вичинення', 'Холодильник із фірмовими келихами для шампанського']
    },
    {
      id: 29,
      name: 'Bentley Bentayga Speed',
      class: 'SUV',
      classEn: 'SUV',
      price: 8500,
      seats: 5,
      power: 635,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '6.0L W12 Twin Turbo',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Bentley_Bentayga_Speed_Genf_2019_1Y7A5886.jpg',
      desc: 'Один із найшвидших позашляховиків у світі з 635-сильним мотором W12. Максимальна швидкість 306 км/год у поєднанні з ручним британським оздобленням.',
      descEn: 'One of the fastest SUVs in the world featuring a 635 hp W12 powerplant. 306 km/h top speed combined with handcrafted British refinement.',
      features: ['Електронна 48-вольтова система придушення кренів Bentley Dynamic Ride', 'Салон з контрастною прошивкою та алькантарою Mulliner', 'Карбон-керамічні гальма з найбільшими у світі дисками (440 мм)', 'Аудіосистема Naim for Bentley 1780W', 'Матричні світлодіодні фари з ефектом ограненого кришталю']
    },
    {
      id: 30,
      name: 'Lamborghini Urus Performante',
      class: 'SUV',
      classEn: 'SUV',
      price: 7500,
      seats: 5,
      power: 666,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '4.0L V8 Biturbo',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Lamborghini_Urus_Performante_1X7A7434.jpg',
      desc: 'Екстремальна полегшена версія супер-SUV від Lamborghini. Карбоновий капот, спортивні пружини замість пневми, вихлоп Akrapovič та драйверський режим Rally.',
      descEn: 'Extreme lightweight iteration of Lamborghini Super-SUV. Carbon fibre hood, sport steel springs, Akrapovič titanium exhaust, and Rally mode.',
      features: ['Титанова вихлопна система Akrapovič у базовому оснащенні', 'Карбоновий капот з функціональними вентиляційними прорізами', 'Ексклюзивний режим Rally для гравійних трас', 'Занижена на 20 мм спортивна сталева підвіска', 'Задній карбоновий спойлер (+38% притискної сили)']
    },
    {
      id: 31,
      name: 'Aston Martin DBX 707',
      class: 'SUV',
      classEn: 'SUV',
      price: 7500,
      seats: 5,
      power: 707,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '4.0L V8 Twin Turbo',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Aston_Martin_DBX707_1X7A0360.jpg',
      desc: 'Найпотужніший люксовий кросовер з 707-сильним мотором AMG. 9-ступенева коробка передач з "мокрим" зчепленням та розгін до 100 за 3.3 с.',
      descEn: 'The most ferocious luxury crossover packing 707 horsepower. Wet-clutch 9-speed transmission and 0-100 km/h in 3.3 seconds.',
      features: ['Вуглецево-керамічні гальма діаметром 420 мм', 'Збільшена на 27% решітка радіатора для охолодження', 'Чотириствольна вихлопна система з активними заслінками', 'Спортивні крісла Sport Plus з 16 регулюваннями', 'Електронний задній диференціал e-diff']
    },
    {
      id: 32,
      name: 'Mercedes-AMG G 63',
      class: 'SUV',
      classEn: 'SUV',
      price: 6500,
      seats: 5,
      power: 585,
      transmission: 'Автомат AMG SPEEDSHIFT',
      transmissionEn: 'Automatic AMG SPEEDSHIFT',
      engine: '4.0L V8 Biturbo',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mercedes-AMG_G63_%28W463A%29_front.jpg',
      desc: 'Культовий "Гелендваген" від підрозділу AMG. Бічний спортивний вихлоп під порогами, неповторний бас мотора V8 та три 100% блокування диференціалів.',
      descEn: 'Iconic "G-Wagon" perfected by AMG. Side-exit sport exhausts, earth-shaking V8 rumble, and three 100% mechanical differential locks.',
      features: ['Бічні патрубки спортивної вихлопної системи AMG', 'Три механічні блокування диференціалів', 'Підвіска AMG RIDE CONTROL з адаптивними амортизаторами', 'Оздоблення шкірою Nappa Exclusive з ромбоподібною прошивкою', 'Аудіосистема Burmester Surround']
    },
    {
      id: 33,
      name: 'Mercedes-Maybach GLS 600',
      class: 'SUV',
      classEn: 'SUV',
      price: 7000,
      seats: 4,
      power: 557,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '4.0L V8 Biturbo + EQ Boost',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Mercedes-Maybach_GLS600_IMG_8106.jpg',
      desc: 'Позашляховий лімузин класу ультралюкс. Автоматичні висувні підніжки з підсвічуванням, задні крісла-оттоманки з масажем та холодильник для шампанського.',
      descEn: 'Ultra-luxury executive SUV limousine. Electrically extending running boards, reclining rear ottoman seats with massage, and champagne fridge.',
      features: ['Висувні алюмінієві підніжки з підсвічуванням логотипу Maybach', 'Спеціальний режим руху Maybach для максимальної плавності', 'Задні індивідуальні крісла First Class з функцією сну', 'Вбудований холодильник та срібні келихи Robbe & Berking', 'Акустична система Burmester High-End 3D Surround']
    },
    {
      id: 34,
      name: 'Range Rover Autobiography',
      class: 'SUV',
      classEn: 'SUV',
      price: 6000,
      seats: 5,
      power: 530,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '4.4L V8 Twin Turbo',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Land_Rover_Range_Rover_Autobiography_L460_Lantau_Bronze_%282%29.jpg',
      desc: 'Нове флагманське покоління L460 у комплектації Autobiography. Чисті монолітні лінії, висувні ручки, активне шумозаглушення в підголівниках та неперевершена плавність.',
      descEn: 'New flagship generation L460 in Autobiography specification. Monolithic design, active noise cancellation in headrests, and supreme comfort.',
      features: ['Повнокероване шасі з кутом повороту задніх коліс до 7.3°', 'Активне шумозаглушення Active Noise Cancellation третього покоління', 'Аудіосистема Meridian Signature 1600W (35 динаміків)', 'Електропривод дверей з сенсорами перешкод', 'Пневматична підвіска з навігаційною предиктивною системою']
    },
    {
      id: 35,
      name: 'Porsche Cayenne Turbo GT',
      class: 'SUV',
      classEn: 'SUV',
      price: 6500,
      seats: 4,
      power: 659,
      transmission: 'Автомат Tiptronic S',
      transmissionEn: 'Automatic Tiptronic S',
      engine: '4.0L V8 Biturbo',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Porsche_Cayenne_Turbo_GT.jpg',
      desc: 'Абсолютний чемпіон Нюрбургринга серед кросоверів. Карбоновий дах, центральний титановий вихлоп та динаміка чистокровного суперкара.',
      descEn: 'Nurburgring lap-record holder among SUVs. Carbon fibre contoured roof, titanium center exhaust, and genuine supercar agility.',
      features: ['Центральна вихлопна система з жаростійкого титану', 'Карбоновий контурний полегшений дах', 'Карбон-керамічні гальма Porsche Ceramic Composite (PCCB)', 'Адаптивне заднє антикрило з карбоновим закрилком', 'Спеціально розроблені трекові шини Pirelli P Zero Corsa']
    },
    {
      id: 36,
      name: 'BMW X5 M Competition (F95)',
      class: 'SUV',
      classEn: 'SUV',
      price: 5000,
      seats: 5,
      power: 625,
      transmission: 'Автомат M Steptronic',
      transmissionEn: 'Automatic M Steptronic',
      engine: '4.4L V8 M TwinPower Turbo',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/BMW_X5_M_%28F95%29_China.jpg',
      desc: 'Баварський атлет без компромісів. 625 кінських сил, повний привід M xDrive з активним заднім M-диференціалом та вибухова динаміка розгону.',
      descEn: 'Uncompromising Bavarian athlete. 625 horsepower, M xDrive all-wheel drive with Active M Differential, and explosive acceleration.',
      features: ['Інтелектуальний повний привід M xDrive зі спортивним налаштуванням', 'Спортивна вихлопна система M Sport з регульованими заслінками', 'Адаптивна підвіска Adaptive M Suspension Professional', 'Спортивні сидіння M з підсвіткою логотипу та вентиляцією', 'Аудіосистема Harman Kardon Surround Sound']
    },
    {
      id: 37,
      name: 'Audi RS Q8',
      class: 'SUV',
      classEn: 'SUV',
      price: 5200,
      seats: 5,
      power: 600,
      transmission: 'Автомат Tiptronic',
      transmissionEn: 'Automatic Tiptronic',
      engine: '4.0L V8 Biturbo TFSI',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2020_Audi_RS_Q8_Front.jpg',
      desc: 'Флагманський спортивний купе-кросовер від Audi Sport. Постійний повний привід quattro, електромеханічна стабілізація кренів та лазерна оптика.',
      descEn: 'Flagship high-performance coupe-SUV by Audi Sport. Permanent quattro AWD, electromechanical active roll stabilization, and laser lighting.',
      features: ['Постійний повний привід quattro зі спортивним диференціалом', 'Електромеханічна 48V система активної стабілізації кренів (EAWS)', 'Керована задня вісь для надзвичайної маневреності', 'Адаптивна пневмопідвіска RS Sport', 'Оздоблення салону шкірою Valcona та перфорованою алькантарою']
    },
    {
      id: 38,
      name: 'Cadillac Escalade-V',
      class: 'SUV',
      classEn: 'SUV',
      price: 6000,
      seats: 7,
      power: 682,
      transmission: 'Автомат 10-ступ.',
      transmissionEn: 'Automatic 10-speed',
      engine: '6.2L V8 Supercharged',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/23_Cadillac_Escalade-V_Base_%281%29.jpg',
      desc: 'Найпотужніший повнорозмірний 7-місний позашляховик Америки. 682 кінські сили компресорного V8, вигнутий 38-дюймовий OLED-екран та акустика AKG на 36 динаміків.',
      descEn: 'The most powerful full-size 7-seat SUV in America. 682 hp supercharged V8, curved 38-inch OLED display, and AKG 36-speaker studio system.',
      features: ['Компресорний 6.2-літровий V8 з ручним збиранням', 'Вигнутий дисплей Curved OLED діагоналлю 38.3 дюйма', 'Аудіосистема AKG Studio Reference (36 динаміків, 3 підсилювачі)', 'Пневматична підвіска Air Ride Adaptive з магнітними стійками', 'Повноцінні 7 місць для дорослих пасажирів']
    },
    {
      id: 39,
      name: 'Land Rover Defender 110 V8 Carpathian',
      class: 'SUV',
      classEn: 'SUV',
      price: 4800,
      seats: 5,
      power: 525,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '5.0L V8 Supercharged',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Land_Rover_Defender_%28L663%29_V8_IMG_6608.jpg',
      desc: 'Ексклюзивна спецверсія культового британського позашляховика у матовому кольорі Carpathian Grey. 525-сильний компресорний V8 та неперевершений офроуд-арсенал.',
      descEn: 'Exclusive bespoke edition of the legendary off-roader in satin Carpathian Grey. 525 hp supercharged V8 and unstoppable all-terrain prowess.',
      features: ['Матова захисна сатинова плівка кузова Carpathian Gloss', '4-трубна спортивна вихлопна система зі спеціальним налаштуванням', 'Електронний активний задній диференціал з векторизацією тяги', 'Система адаптації до дорожніх умов Terrain Response 2 з режимом Dynamic', 'Оздоблення сидінь преміальною замшею Miko Suedecloth та шкірою Windsor']
    },

    /* ── 40-50: КАБРІОЛЕТИ & СПАЙДЕРИ ── */
    {
      id: 40,
      name: 'Rolls-Royce Dawn Black Badge',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 13000,
      seats: 4,
      power: 601,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '6.6L V12 Twin Turbo',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Rolls-Royce_Dawn_1X7A7900.jpg',
      desc: 'Найбільш спокусливий і тихий чотиримісний кабріолет у світі в темній спецверсії Black Badge. 6-шаровий тканинний дах "The Silent Ballet" та чорна хромована статуетка Spirit of Ecstasy.',
      descEn: 'The most seductive and silent four-seat convertible in Black Badge specification. 6-layer fabric roof "The Silent Ballet" and dark chrome Spirit of Ecstasy.',
      features: ['Шестишаровий безшумний тканинний дах The Silent Ballet', 'Темна статуетка Spirit of Ecstasy з глянцевого чорного хрому', 'Композитне вуглепластикове оздоблення інтер\'єру Technical Fibre', 'Спортивний вихлоп із глибоким оксамитовим баритоном V12', 'Аудіосистема Rolls-Royce Bespoke Audio']
    },
    {
      id: 41,
      name: 'Bentley Continental GT Convertible',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 8500,
      seats: 4,
      power: 659,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '6.0L W12 Twin Turbo',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Bentley_Continental_GTC_%28II%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_25._Oktober_2011%2C_D%C3%BCsseldorf.jpg',
      desc: 'Подорож під відкритим небом із комфортом королівського гран-туризмо. Акустичний м\'який дах Z-fold, підігрів шиї в сидіннях та могутній 659-сильний мотор W12.',
      descEn: 'Open-air grand touring with royal comfort. Z-fold acoustic soft-top, neck warmers integrated into seats, and effortless 659 hp W12 power.',
      features: ['Акустичний 4-шаровий дах Z-Fold (складається за 19 с на швидкості до 50 км/год)', 'Система подачі теплого повітря в зону шиї Neck Warmer', 'Підігрів керма, сидінь та підлокітників', 'Поворотний тристоронній дисплей Bentley Rotating Display', 'Аудіосистема Naim for Bentley (2200W, 18 динаміків)']
    },
    {
      id: 42,
      name: 'Ferrari 812 GTS',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 12500,
      seats: 2,
      power: 800,
      transmission: 'Робот F1 DCT',
      transmissionEn: 'Dual-Clutch F1 DCT',
      engine: '6.5L V12 Атмосферний',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Ferrari_812_GTS_white_%283%29.jpg',
      desc: 'Найпотужніший серійний спайдер з переднім розташуванням атмосферного V12 в історії Ferrari. 800 кінських сил, жорсткий складаний дах RHT та симфонія 12 циліндрів на 8900 об/хв.',
      descEn: 'The most powerful front-engine naturally aspirated V12 spider in Ferrari history. 800 hp, retractable hardtop (RHT), and an operatic 8,900 RPM crescendo.',
      features: ['Жорсткий складаний дах Retractable Hard Top (RHT) за 14 секунд', 'Електропідсилювач керма з функцією Ferrari Peak Performance (FPP)', 'Система контролю бічного ковзання Side Slip Control (SSC) 5.0', 'Заднє скло з електроприводом для регулювання звуку вихлопу в салоні', 'Карбон-керамічна гальмівна система Brembo Extreme Design']
    },
    {
      id: 43,
      name: 'Lamborghini Huracán Spyder',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 10000,
      seats: 2,
      power: 640,
      transmission: 'Робот LDF',
      transmissionEn: 'Dual-Clutch LDF',
      engine: '5.2L V10 Атмосферний',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Lamborghini_Huracan_Spyder.jpg',
      desc: 'Відкритий спайдер з високооборотним атмосферним мотором V10 на 640 сил. Інтелектуальна система LDVI, керована задня вісь та електрогідравлічний м\'який дах.',
      descEn: 'Open-top spider powered by a screaming 640 hp naturally aspirated V10. LDVI vehicle dynamics brain, rear-wheel steering, and electrohydraulic soft-top.',
      features: ['Інтегрована система управління динамікою Lamborghini Dinamica Veicolo Integrata (LDVI)', 'Електропривод даху за 17 секунд на швидкості до 50 км/год', 'Керована задня вісь та вектор тяги на всіх чотирьох колесах', 'Спортивний вихлоп з виведеними високо патрубками', '8.4-дюймовий сенсорний екран HMI на центральній консолі']
    },
    {
      id: 44,
      name: 'McLaren Artura Spider',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 9500,
      seats: 2,
      power: 700,
      transmission: 'Робот SSG',
      transmissionEn: 'Dual-Clutch SSG',
      engine: '3.0L V6 Twin-Turbo + E-Motor',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/McLaren_Artura_IAA_2021_1X7A0135.jpg',
      desc: 'Ультралегкий високоефективний гібридний спайдер нового покоління. Карбоновий монокок MCLA, електропривод жорсткого даху за рекордні 11 с та сумарні 700 к.с.',
      descEn: 'Next-generation lightweight high-performance hybrid spider. MCLA carbon monocoque, 11-second folding hardtop, and 700 hp powertrain.',
      features: ['Вуглепластикова архітектура нового покоління McLaren Carbon Lightweight Architecture (MCLA)', 'Жорсткий складаний дах RHT з опцією електрохромного скла', 'Електронний диференціал E-differential для точного керування в поворотах', 'Ланч-контроль та режим чисто електричного руху (Zero-emission mode)', 'Аудіосистема Bowers & Wilkins з 12 динаміками']
    },
    {
      id: 45,
      name: 'Aston Martin DBS Superleggera Volante',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 10500,
      seats: 4,
      power: 725,
      transmission: 'Автомат',
      transmissionEn: 'Automatic',
      engine: '5.2L V12 Twin Turbo',
      year: 2024,
      icon: '🚘',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Aston_Martin_DBS_Superleggera_Volante.jpg',
      desc: 'Відкрита версія флагманського супер-гран-туризмо Aston Martin. 8-шаровий тканинний дах забезпечує акустичний комфорт купе, а 725-сильний V12 дарує ураганну тягу.',
      descEn: 'Open-top version of Aston Martin flagship super GT. 8-layer fabric hood provides coupe-like refinement, while the 725 hp V12 delivers thunderous acceleration.',
      features: ['8-шаровий акустичний дах, випробуваний у суворих погодних умовах', 'Карбоновий капот, крила та елементи спліттера Superleggera', 'Аеродинамічний дифузор подвійного профілю', 'Салон ручної роботи з перфорованою шкірою Caithness', 'Карбон-керамічні гальма з моноблочними супортами']
    },
    {
      id: 46,
      name: 'Mercedes-Benz AMG GT Cabrio',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 6500,
      seats: 2,
      power: 557,
      transmission: 'Робот AMG SPEEDSHIFT DCT',
      transmissionEn: 'Dual-Clutch AMG DCT',
      engine: '4.0L V8 Biturbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Mercedes-AMG_R190_GT_R_Roadster_1X7A6316.jpg',
      desc: 'Довгий капот, низька посадка та відкрите небо. Німецький спорткар з 4.0-літровим мотором "Hot Inside V", спортивним вихлопом AMG Performance та висувним антикрилом.',
      descEn: 'Long bonnet, low stance, and boundless sky. German sports roadster featuring 4.0L "Hot Inside V" biturbo, switchable AMG exhaust, and active rear wing.',
      features: ['Система обігріву зони шиї AIRSCARF та вітрозахисний екран AIRCAP', 'Керована задня вісь AMG з кутом повороту до 1.5°', 'Спортивна вихлопна система AMG Performance з регульованими клапанами', 'Адаптивна підвіска AMG RIDE CONTROL з триступеневим регулюванням', 'Спортивні крісла AMG Performance з бічною підтримкою']
    },
    {
      id: 47,
      name: 'BMW M8 Competition Convertible',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 7000,
      seats: 4,
      power: 625,
      transmission: 'Автомат M Steptronic',
      transmissionEn: 'Automatic M Steptronic',
      engine: '4.4L V8 M TwinPower Turbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/2019_BMW_M8_Competition_Front.jpg',
      desc: 'Вершина спортивної лінійки BMW M з відкритим верхом. 625 к.с., інтелектуальний повний привід M xDrive з режимом 2WD (лише задній привід) та розгін до сотні за 3.3 с.',
      descEn: 'The pinnacle of BMW M lineup under open sky. 625 hp, M xDrive AWD with pure rear-wheel-drive 2WD mode, and 0-100 km/h in 3.3 seconds.',
      features: ['Режим чистого заднього приводу 2WD з вимкненням DSC для дрифту', 'Багатошаровий шумоізоляційний м\'який дах (складається за 15 с)', 'Гальмівна система M Compound з можливістю налаштування чутливості педалі', 'Проекційний дисплей BMW Head-Up з графікою M View', 'Аудіосистема Bowers & Wilkins Diamond Surround']
    },
    {
      id: 48,
      name: 'Porsche 911 Turbo S Cabriolet (992)',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 9000,
      seats: 4,
      power: 650,
      transmission: 'Робот PDK',
      transmissionEn: 'Dual-Clutch PDK',
      engine: '3.8L Boxer Biturbo',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Porsche_992_Turbo_S_convertible_DSC_8316.jpg',
      desc: 'Кабріолет із динамікою ракети. 650 кінських сил, 800 Нм тяги, розгін 0-100 за шалені 2.8 секунди та інноваційний матерчатий дах з інтегрованими магнієвими панелями.',
      descEn: 'Convertible with rocket-ship performance. 650 horsepower, 800 Nm of torque, 0-100 km/h in an astonishing 2.8 seconds, and magnesium-framed soft top.',
      features: ['Інноваційний тканинний дах з жорсткими магнієвими секціями Panel Bow', 'Керамічні гальма Porsche Ceramic Composite Brake (PCCB) з 10-поршневими супортами', 'Активна аеродинаміка Porsche Active Aerodynamics (PAA) з висувним переднім спліттером', 'Пакет Sport Chrono з активними гідроопорами двигуна', 'Система придушення кренів кузова Porsche Dynamic Chassis Control (PDCC)']
    },
    {
      id: 49,
      name: 'Porsche 718 Boxster GTS',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 4000,
      seats: 2,
      power: 400,
      transmission: 'Робот PDK',
      transmissionEn: 'Dual-Clutch PDK',
      engine: '4.0L Boxer Атмосферний',
      year: 2024,
      icon: '🏎️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Porsche_718_Boxster_GTS.jpg',
      desc: 'Еталон середньомоторного родстера для автомобільних пуристів. Атмосферний 4.0-літровий опозитний двигун на 400 к.с., ідеальний розподіл ваги 50:50 та спортивний вихлоп.',
      descEn: 'The benchmark mid-engine roadster for driving purists. Naturally aspirated 4.0L boxer delivering 400 hp, 50:50 balance, and spine-tingling exhaust.',
      features: ['Атмосферний 6-циліндровий опозитник без турбонаддуву (до 7800 об/хв)', 'Спортивна вихлопна система GTS з двома чорними патрубками', 'Спортивна підвіска PASM із заниженням кліренсу на 20 мм', 'Механічний диференціал підвищеного тертя з векторизацією тяги PTV', 'Оздоблення салону преміальною чорною алькантарою Race-Tex']
    },
    {
      id: 50,
      name: 'Mercedes-Benz G 500 Cabrio',
      class: 'Кабріолет',
      classEn: 'Convertible',
      price: 6500,
      seats: 5,
      power: 388,
      transmission: 'Автомат 7G-TRONIC',
      transmissionEn: 'Automatic 7G-TRONIC',
      engine: '5.5L V8 (Final Edition 200)',
      year: 2024,
      icon: '🚙',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Mercedes-Benz_G-Klasse_Cabriolet_%28W463%29_G_500_%282004%29_%2852573181986%29.jpg',
      desc: 'Рідкісний та легендарний короткобазний позашляховий кабріолет колекційної лімітованої серії Final Edition 200. Електроприводний м\'який дах, класичний V8 та три 100% блокування.',
      descEn: 'Rare and iconic short-wheelbase off-road cabriolet from the collectible Final Edition 200 series. Electrohydraulic soft top, classic V8, and 3 locking diffs.',
      features: ['Колекційна лімітована серія Final Edition 200 з шильдами на стійках', 'Електрогідравлічний складаний м\'який дах', 'Три 100% механічні блокування диференціалів', 'Шкіряний салон designo з контрастною строчкою', 'Класичний атмосферний двигун Mercedes-Benz 5.5L V8 M273']
    }
  ];

  /* ── State ──────────────────────────────────────────────── */
  let activeClass = 'all';
  let searchQuery = '';

  /* ── Render ─────────────────────────────────────────────── */
  function renderCards() {
    const grid = document.getElementById('cars-grid');
    const noResults = document.getElementById('no-results');
    if (!grid) return;

    const filtered = CARS.filter(car => {
      const matchClass = activeClass === 'all' || car.class === activeClass;
      const matchSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchClass && matchSearch;
    });

    // Clear
    grid.innerHTML = '';

    if (filtered.length === 0) {
      if (noResults) noResults.classList.add('visible');
      return;
    }
    if (noResults) noResults.classList.remove('visible');

    filtered.forEach((car, i) => {
      const card = createCard(car, i);
      grid.appendChild(card);
    });

    // Re-trigger scroll reveal for newly rendered cards
    if (window.reinitReveal) window.reinitReveal();
  }

  function createCard(car, index) {
    const isEn = document.documentElement.lang === 'en';
    const article = document.createElement('article');
    article.className = 'car-card reveal';
    article.style.transitionDelay = `${(index % 6) * 50}ms`;
    article.dataset.class = car.class;
    article.setAttribute('aria-label', car.name);

    const displayClass = isEn && car.classEn ? car.classEn : car.class;
    const displayTrans = isEn && car.transmissionEn ? car.transmissionEn : car.transmission;
    const displayDesc = isEn && car.descEn ? car.descEn : car.desc;
    const seatsTextUa = `${car.seats} ${seatsLabel(car.seats)}`;
    const seatsTextEn = `${car.seats} ${car.seats === 1 ? 'seat' : 'seats'}`;

    article.innerHTML = `
      <div class="car-card__image" role="img" aria-label="${car.name}">
        ${car.image ? `
          <img src="${car.image}" alt="${car.name}" class="car-card__img" loading="lazy" referrerpolicy="no-referrer"
               onerror="this.style.display='none'; this.nextElementSibling.nextElementSibling.style.display='flex';" />
          <div class="car-card__image-overlay"></div>
        ` : ''}
        <div class="car-card__image-pattern"></div>
        <div class="car-card__image-label" ${car.image ? 'style="display:none;"' : ''}>
          <span class="car-card__image-icon" aria-hidden="true">${car.icon}</span>
          <span class="car-card__image-name">${car.name}</span>
        </div>
        <div class="car-card__badge">
          <span class="badge badge--dark" data-ua="${car.class}" data-en="${car.classEn || car.class}">${displayClass}</span>
        </div>
      </div>
      <div class="car-card__body">
        <div class="car-card__header">
          <h3 class="car-card__name">${car.name}</h3>
          <div class="car-card__price">
            <span class="car-card__price-num">${car.price.toLocaleString('uk-UA')} ₴</span>
            <span class="car-card__price-label" data-ua="за день" data-en="per day">${isEn ? 'per day' : 'за день'}</span>
          </div>
        </div>
        <div class="car-card__specs">
          <span class="car-card__spec">
            <span class="car-card__spec-icon" aria-hidden="true">👤</span>
            <span data-ua="${seatsTextUa}" data-en="${seatsTextEn}">${isEn ? seatsTextEn : seatsTextUa}</span>
          </span>
          <span class="car-card__spec">
            <span class="car-card__spec-icon" aria-hidden="true">⚡</span>
            <span>${car.power} л.с.</span>
          </span>
          <span class="car-card__spec">
            <span class="car-card__spec-icon" aria-hidden="true">⚙️</span>
            <span data-ua="${car.transmission}" data-en="${car.transmissionEn || car.transmission}">${displayTrans}</span>
          </span>
        </div>
        <p class="car-card__desc" data-ua="${car.desc}" data-en="${car.descEn || car.desc}">${displayDesc}</p>
        <div class="car-card__actions">
          <a href="contact.html?car=${encodeURIComponent(car.name)}" class="btn btn--primary btn--sm"
             data-ua="Орендувати" data-en="Rent Now">${isEn ? 'Rent Now' : 'Орендувати'}</a>
          <button class="btn btn--secondary btn--sm" onclick="LuxCatalog.openModal(${car.id})"
                  data-ua="Детальніше" data-en="Details"
                  aria-label="Детальніше про ${car.name}">${isEn ? 'Details' : 'Детальніше'}</button>
        </div>
      </div>
    `;

    setTimeout(() => {
      article.classList.add('visible');
    }, 40 + (index % 6) * 40);

    return article;
  }

  function seatsLabel(n) {
    if (n === 1) return 'місце';
    if (n >= 2 && n <= 4) return 'місця';
    return 'місць';
  }

  /* ── Filter ─────────────────────────────────────────────── */
  function initFilter() {
    const tabs = document.querySelectorAll('.filter-tab');
    const searchInput = document.getElementById('car-search');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeClass = tab.dataset.class;
        renderCards();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderCards();
      });
    }
  }

  /* ── Modal ──────────────────────────────────────────────── */
  function openModal(carId) {
    const car = CARS.find(c => c.id === carId);
    if (!car) return;

    const overlay = document.getElementById('car-modal');
    if (!overlay) return;
    const isEn = document.documentElement.lang === 'en';

    // Image handling
    const imgEl = overlay.querySelector('#modal-car-img');
    const placeholderEl = overlay.querySelector('#modal-car-placeholder');
    if (imgEl && car.image) {
      imgEl.src = car.image;
      imgEl.alt = car.name;
      imgEl.referrerPolicy = 'no-referrer';
      imgEl.style.display = 'block';
      imgEl.onerror = function() {
        this.style.display = 'none';
        if (placeholderEl) placeholderEl.style.display = 'flex';
      };
      if (placeholderEl) placeholderEl.style.display = 'none';
    } else if (imgEl) {
      imgEl.style.display = 'none';
      if (placeholderEl) placeholderEl.style.display = 'flex';
    }

    if (overlay.querySelector('#modal-car-icon')) overlay.querySelector('#modal-car-icon').textContent = car.icon;
    if (overlay.querySelector('#modal-car-image-name')) overlay.querySelector('#modal-car-image-name').textContent = car.name;
    if (overlay.querySelector('#modal-title')) overlay.querySelector('#modal-title').textContent = car.name;
    if (overlay.querySelector('#modal-class')) overlay.querySelector('#modal-class').textContent = isEn && car.classEn ? car.classEn : car.class;
    if (overlay.querySelector('#modal-desc')) overlay.querySelector('#modal-desc').textContent = isEn && car.descEn ? car.descEn : car.desc;
    if (overlay.querySelector('#modal-price')) overlay.querySelector('#modal-price').textContent = car.price.toLocaleString('uk-UA') + ' ₴';

    // Specs
    const specsEl = overlay.querySelector('#modal-specs-body');
    if (specsEl) {
      const classVal = isEn && car.classEn ? car.classEn : car.class;
      const transVal = isEn && car.transmissionEn ? car.transmissionEn : car.transmission;
      const seatsVal = isEn ? `${car.seats} ${car.seats === 1 ? 'seat' : 'seats'}` : `${car.seats} ${seatsLabel(car.seats)}`;
      specsEl.innerHTML = `
        <div class="modal__spec-row">
          <span class="modal__spec-key">${isEn ? 'Class' : 'Клас'}</span>
          <span class="modal__spec-val">${classVal}</span>
        </div>
        <div class="modal__spec-row">
          <span class="modal__spec-key">${isEn ? 'Seats' : 'Місць'}</span>
          <span class="modal__spec-val">${seatsVal}</span>
        </div>
        <div class="modal__spec-row">
          <span class="modal__spec-key">${isEn ? 'Power' : 'Потужність'}</span>
          <span class="modal__spec-val">${car.power} ${isEn ? 'hp' : 'л.с.'}</span>
        </div>
        <div class="modal__spec-row">
          <span class="modal__spec-key">${isEn ? 'Transmission' : 'КПП'}</span>
          <span class="modal__spec-val">${transVal}</span>
        </div>
        <div class="modal__spec-row">
          <span class="modal__spec-key">${isEn ? 'Engine' : 'Двигун'}</span>
          <span class="modal__spec-val">${car.engine}</span>
        </div>
        <div class="modal__spec-row">
          <span class="modal__spec-key">${isEn ? 'Year' : 'Рік'}</span>
          <span class="modal__spec-val">${car.year}</span>
        </div>
      `;
    }

    // Features
    const featuresEl = overlay.querySelector('#modal-features');
    if (featuresEl && car.features) {
      featuresEl.innerHTML = car.features
        .map(f => `<li style="font-size:0.875rem;padding:4px 0;color:var(--text-secondary);">✦ ${f}</li>`)
        .join('');
    }

    // Set car in mini booking form
    const carSelect = overlay.querySelector('#modal-car-select');
    if (carSelect) {
      carSelect.value = car.name;
    }

    // Open
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    const closeBtn = overlay.querySelector('.modal__close');
    if (closeBtn) setTimeout(() => closeBtn.focus(), 100);
  }

  function closeModal() {
    const overlay = document.getElementById('car-modal');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function initModal() {
    const overlay = document.getElementById('car-modal');
    if (!overlay) return;

    // Close button
    const closeBtn = overlay.querySelector('.modal__close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Click outside modal body
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });

    // Mini booking form in modal
    const form = overlay.querySelector('#modal-booking-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const carName = overlay.querySelector('#modal-car-select')?.value || '';
        const dateFrom = overlay.querySelector('#modal-date-from')?.value || '';
        const dateTo = overlay.querySelector('#modal-date-to')?.value || '';
        const params = new URLSearchParams({ car: carName, from: dateFrom, to: dateTo });
        window.location.href = `contact.html?${params.toString()}`;
      });
    }
  }

  /* ── Public API ─────────────────────────────────────────── */
  window.LuxCatalog = { openModal, closeModal, CARS };

  /* ── Init ───────────────────────────────────────────────── */
  function init() {
    if (!document.getElementById('cars-grid')) return; // only catalog page
    renderCards();
    initFilter();
    initModal();

    // Check URL parameters to auto-open modal if requested
    const urlParams = new URLSearchParams(window.location.search);
    const modalId = urlParams.get('modal');
    const carParam = urlParams.get('car');
    if (modalId) {
      setTimeout(() => openModal(parseInt(modalId, 10)), 150);
    } else if (carParam) {
      const found = CARS.find(c => c.name.toLowerCase() === carParam.toLowerCase());
      if (found) setTimeout(() => openModal(found.id), 150);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
