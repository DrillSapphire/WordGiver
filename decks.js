// decks.js

const decksVersion = "v13"; // added with clues

// --- DATABASE ---
const decks = {
    words_normal: [
        // --- ANIMAL ---
        { q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Dolphin", a_th: "โลมา" },
        { q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Eagle", a_th: "นกอินทรี" },
        { q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Elephant", a_th: "ช้าง" },
        { q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Fox", a_th: "สุนัขจิ้งจอก" },
        { q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Kangaroo", a_th: "จิงโจ้" },
        { q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Octopus", a_th: "หมึกยักษ์" },
        { q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Owl", a_th: "นกฮูก" },
        { q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Penguin", a_th: "นกเพนกวิน" },
        { q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Shark", a_th: "ฉลาม" },
        { q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Tiger", a_th: "เสือ" },
		{ q: "Category: Animal", q_th: "หมวดหมู่: สัตว์", a: "Panda", a_th: "แพนด้า" },

        // --- FOOD ---
        { q: "Category: Food", q_th: "หมวดหมู่: อาหาร", a: "Avocado", a_th: "อะโวคาโด" },
        { q: "Category: Food", q_th: "หมวดหมู่: อาหาร", a: "Cheese", a_th: "ชีส" },
        { q: "Category: Food", q_th: "หมวดหมู่: อาหาร", a: "Chocolate", a_th: "ช็อกโกแลต" },
        { q: "Category: Food", q_th: "หมวดหมู่: อาหาร", a: "Croissant", a_th: "ครัวซองต์" },
        { q: "Category: Food", q_th: "หมวดหมู่: อาหาร", a: "Garlic", a_th: "กระเทียม" },
        { q: "Category: Food", q_th: "หมวดหมู่: อาหาร", a: "Honey", a_th: "น้ำผึ้ง" },
        { q: "Category: Food", q_th: "หมวดหมู่: อาหาร", a: "Mushroom", a_th: "เห็ด" },
        { q: "Category: Food", q_th: "หมวดหมู่: อาหาร", a: "Pizza", a_th: "พิซซ่า" },
        { q: "Category: Food", q_th: "หมวดหมู่: อาหาร", a: "Sushi", a_th: "ซูชิ" },
        { q: "Category: Food", q_th: "หมวดหมู่: อาหาร", a: "Watermelon", a_th: "แตงโม" },

        // --- MACHINE ---
        { q: "Category: Machine", q_th: "หมวดหมู่: เครื่องจักร", a: "Boiler", a_th: "หม้อต้ม" },
        { q: "Category: Machine", q_th: "หมวดหมู่: เครื่องจักร", a: "Conveyor Belt", a_th: "สายพานลำเลียง" },
        { q: "Category: Machine", q_th: "หมวดหมู่: เครื่องจักร", a: "Elevator", a_th: "ลิฟต์" },
        { q: "Category: Machine", q_th: "หมวดหมู่: เครื่องจักร", a: "Engine", a_th: "เครื่องยนต์" },
        { q: "Category: Machine", q_th: "หมวดหมู่: เครื่องจักร", a: "Generator", a_th: "เครื่องกำเนิดไฟฟ้า" },
        { q: "Category: Machine", q_th: "หมวดหมู่: เครื่องจักร", a: "Pump", a_th: "เครื่องสูบน้ำ / ปั๊ม" },
        { q: "Category: Machine", q_th: "หมวดหมู่: เครื่องจักร", a: "Radar", a_th: "เรดาร์" },
        { q: "Category: Machine", q_th: "หมวดหมู่: เครื่องจักร", a: "Router", a_th: "เราเตอร์" },
        { q: "Category: Machine", q_th: "หมวดหมู่: เครื่องจักร", a: "Turbine", a_th: "กังหัน" },
        { q: "Category: Machine", q_th: "หมวดหมู่: เครื่องจักร", a: "Typewriter", a_th: "เครื่องพิมพ์ดีด" },

        // --- OBJECT ---
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Anchor", a_th: "สมอเรือ" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Anvil", a_th: "ทั่งตีเหล็ก" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Backpack", a_th: "กระเป๋าเป้" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Battery", a_th: "แบตเตอรี่" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Book", a_th: "หนังสือ" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Camera", a_th: "กล้องถ่ายรูป" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Candle", a_th: "เทียน" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Coin", a_th: "เหรียญ" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Dice", a_th: "ลูกเต๋า" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Guitar", a_th: "กีตาร์" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Helmet", a_th: "หมวกกันน็อค" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Hourglass", a_th: "นาฬิกาทราย" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Joystick", a_th: "จอยสติ๊ก" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Keyboard", a_th: "คีย์บอร์ด" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Lantern", a_th: "ตะเกียง" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Magnifying Glass", a_th: "แว่นขยาย" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Megaphone", a_th: "โทรโข่ง" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Metronome", a_th: "เมโทรนอม" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Mirror", a_th: "กระจก" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Passport", a_th: "พาสปอร์ต" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Scuba Tank", a_th: "ถังออกซิเจนดำน้ำ" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Shield", a_th: "โล่" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Suitcase", a_th: "กระเป๋าเดินทาง" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Telescope", a_th: "กล้องโทรทรรศน์" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Trophy", a_th: "ถ้วยรางวัล" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Umbrella", a_th: "ร่ม" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Wallet", a_th: "กระเป๋าสตางค์" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Watch", a_th: "นาฬิกาข้อมือ" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Whistle", a_th: "นกหวีด" },
        { q: "Category: Object", q_th: "หมวดหมู่: สิ่งของ", a: "Window", a_th: "หน้าต่าง" },

        // --- PLACE ---
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Airport", a_th: "สนามบิน" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Bridge", a_th: "สะพาน" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Castle", a_th: "ปราสาท" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Desert", a_th: "ทะเลทราย" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Factory", a_th: "โรงงาน" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Hospital", a_th: "โรงพยาบาล" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Library", a_th: "ห้องสมุด" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Lighthouse", a_th: "ประภาคาร" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Museum", a_th: "พิพิธภัณฑ์" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Supermarket", a_th: "ซูเปอร์มาร์เก็ต" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Tavern", a_th: "โรงเตี๊ยม" },
        { q: "Category: Place", q_th: "หมวดหมู่: สถานที่", a: "Volcano", a_th: "ภูเขาไฟ" },

        // --- ROLE ---
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Astronaut", a_th: "นักบินอวกาศ" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Captain", a_th: "กัปตัน" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Chef", a_th: "เชฟ" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Detective", a_th: "นักสืบ" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Doctor", a_th: "หมอ" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Engineer", a_th: "วิศวกร" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Farmer", a_th: "เกษตรกร / ชาวนา" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Firefighter", a_th: "นักดับเพลิง" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Pilot", a_th: "นักบิน" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Producer", a_th: "โปรดิวเซอร์" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Sailor", a_th: "กะลาสี" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Soldier", a_th: "ทหาร" },

        // --- TOOL ---
        { q: "Category: Tool", q_th: "หมวดหมู่: เครื่องมือ", a: "Binoculars", a_th: "กล้องส่องทางไกล" },
        { q: "Category: Tool", q_th: "หมวดหมู่: เครื่องมือ", a: "Calculator", a_th: "เครื่องคิดเลข" },
        { q: "Category: Tool", q_th: "หมวดหมู่: เครื่องมือ", a: "Compass", a_th: "เข็มทิศ" },
        { q: "Category: Tool", q_th: "หมวดหมู่: เครื่องมือ", a: "Flashlight", a_th: "ไฟฉาย" },
        { q: "Category: Tool", q_th: "หมวดหมู่: เครื่องมือ", a: "Hammer", a_th: "ค้อน" },
        { q: "Category: Tool", q_th: "หมวดหมู่: เครื่องมือ", a: "Microphone", a_th: "ไมโครโฟน" },
        { q: "Category: Tool", q_th: "หมวดหมู่: เครื่องมือ", a: "Scissors", a_th: "กรรไกร" },
        { q: "Category: Tool", q_th: "หมวดหมู่: เครื่องมือ", a: "Stopwatch", a_th: "นาฬิกาจับเวลา" },
        { q: "Category: Tool", q_th: "หมวดหมู่: เครื่องมือ", a: "Thermometer", a_th: "เทอร์โมมิเตอร์" },
        { q: "Category: Tool", q_th: "หมวดหมู่: เครื่องมือ", a: "Wrench", a_th: "ประแจ" },

        // --- VEHICLE ---
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Airplane", a_th: "เครื่องบิน" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Ambulance", a_th: "รถพยาบาล" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Bicycle", a_th: "จักรยาน" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Bus", a_th: "รถประจำทาง" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Destroyer", a_th: "เรือพิฆาต" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Drone", a_th: "โดรน" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Fire Truck", a_th: "รถดับเพลิง" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Helicopter", a_th: "เฮลิคอปเตอร์" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Hot Air Balloon", a_th: "บอลลูน" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Hovercraft", a_th: "เรือโฮเวอร์คราฟต์" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Jet Ski", a_th: "เจ็ตสกี" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Motorcycle", a_th: "รถจักรยานยนต์" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Snowmobile", a_th: "รถสโนว์โมบิล" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Speedboat", a_th: "เรือเร็ว" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Submarine", a_th: "เรือดำน้ำ" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Tank", a_th: "รถถัง" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Tractor", a_th: "รถแทรกเตอร์" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Train", a_th: "รถไฟ" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Tricycle", a_th: "รถสามล้อ" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Tuk Tuk", a_th: "รถตุ๊กตุ๊ก" },
        { q: "Category: Vehicle", q_th: "หมวดหมู่: ยานพาหนะ", a: "Yacht", a_th: "เรือยอชต์" }
    ],
    words_extreme: [
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Ballistics", a_th: "ขีปนาวุธ" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Propulsion", a_th: "การขับเคลื่อน" },
        { q: "Category: Role", q_th: "หมวดหมู่: บทบาท", a: "Alchemist", a_th: "นักเล่นแร่แปรธาตุ" },
        { q: "Category: Action", q_th: "หมวดหมู่: การกระทำ", a: "Espionage", a_th: "การจารกรรม" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Cryptography", a_th: "วิทยาการเข้ารหัสลับ" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Thermodynamics", a_th: "อุณหพลศาสตร์" },
        { q: "Category: Phenomenon", q_th: "หมวดหมู่: ปรากฏการณ์", a: "Interference", a_th: "การแทรกสอด/คลื่นแทรก" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Trajectory", a_th: "วิถีโค้ง" },
        { q: "Category: Action", q_th: "หมวดหมู่: การกระทำ", a: "Sabotage", a_th: "การก่อวินาศกรรม" },
        { q: "Category: Emotion", q_th: "หมวดหมู่: อารมณ์", a: "Paranoia", a_th: "ความหวาดระแวง" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Telemetry", a_th: "โทรมาตร" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Torque", a_th: "แรงบิด" },
        { q: "Category: Machine Part", q_th: "หมวดหมู่: ชิ้นส่วนเครื่องจักร", a: "Gearbox", a_th: "กระปุกเกียร์" },
        { q: "Category: Phenomenon", q_th: "หมวดหมู่: ปรากฏการณ์", a: "Resonance", a_th: "การสั่นพ้อง" },
        { q: "Category: Phenomenon", q_th: "หมวดหมู่: ปรากฏการณ์", a: "Gravity", a_th: "แรงโน้มถ่วง" },
        { q: "Category: Action", q_th: "หมวดหมู่: การกระทำ", a: "Ambush", a_th: "การซุ่มโจมตี" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Velocity", a_th: "ความเร็ว" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Buoyancy", a_th: "แรงลอยตัว" },
        { q: "Category: Action", q_th: "หมวดหมู่: การกระทำ", a: "Calibration", a_th: "การสอบเทียบ" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Friction", a_th: "แรงเสียดทาน" },
        { q: "Category: Phenomenon", q_th: "หมวดหมู่: ปรากฏการณ์", a: "Echo", a_th: "เสียงสะท้อน" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Aerodynamics", a_th: "อากาศพลศาสตร์" },
        { q: "Category: Action", q_th: "หมวดหมู่: การกระทำ", a: "Mutiny", a_th: "การก่อกบฏ" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Deflection", a_th: "การเบี่ยงเบน (ทิศทาง)" },
        { q: "Category: Event", q_th: "หมวดหมู่: เหตุการณ์", a: "Extinction", a_th: "การสูญพันธุ์" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Inertia", a_th: "ความเฉื่อย" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Frequency", a_th: "ความถี่" },
        { q: "Category: Phenomenon", q_th: "หมวดหมู่: ปรากฏการณ์", a: "Metamorphosis", a_th: "การลอกคราบ / กลายร่าง" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Symbiosis", a_th: "ภาวะพึ่งพาอาศัยกัน" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Quantum", a_th: "ควอนตัม" },
        { q: "Category: Action", q_th: "หมวดหมู่: การกระทำ", a: "Subterfuge", a_th: "กลอุบาย" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Paradigm", a_th: "กระบวนทัศน์" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Catalyst", a_th: "ตัวเร่งปฏิกิริยา" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Entropy", a_th: "เอนโทรปี" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Equilibrium", a_th: "ดุลยภาพ" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Momentum", a_th: "โมเมนตัม" },
        { q: "Category: Event", q_th: "หมวดหมู่: เหตุการณ์", a: "Eclipse", a_th: "อุปราคา" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Algorithm", a_th: "อัลกอริทึม" },
        { q: "Category: Phenomenon", q_th: "หมวดหมู่: ปรากฏการณ์", a: "Illusion", a_th: "ภาพลวงตา" },
        { q: "Category: Action", q_th: "หมวดหมู่: การกระทำ", a: "Camouflage", a_th: "การพรางตัว" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Propaganda", a_th: "โฆษณาชวนเชื่อ" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Utopia", a_th: "ยูโทเปีย" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Paradox", a_th: "ความขัดแย้งในตัวเอง" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Hierarchy", a_th: "ลำดับขั้น" },
        { q: "Category: Event", q_th: "หมวดหมู่: เหตุการณ์", a: "Solstice", a_th: "ครีษมายัน / เหมายัน" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Zenith", a_th: "จุดเหนือศีรษะ" },
        { q: "Category: Action", q_th: "หมวดหมู่: การกระทำ", a: "Smuggling", a_th: "การลักลอบนำเข้า" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Hemisphere", a_th: "ซีกโลก" },
        { q: "Category: Phenomenon", q_th: "หมวดหมู่: ปรากฏการณ์", a: "Radiation", a_th: "รังสี" },
        { q: "Category: Concept", q_th: "หมวดหมู่: แนวคิด", a: "Insulation", a_th: "ฉนวน" }
    ],
    fic_char: [
		// ANIME & MANGA (อนิเมะ/มังงะ)
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Doraemon", a_th: "โดราเอมอน" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Dekisugi", a_th: "เดคิซึงิ (Doraemon)" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Son Goku", a_th: "ซง โกคู" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Astro Boy", a_th: "เจ้าหนูอะตอม" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Son Gohan", a_th: "ซง โกฮัง" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Frieza", a_th: "ฟรีซเซอร์" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Piccolo", a_th: "พิโกโร่ (DragonBall Z)" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Tiger Mask", a_th: "หน้ากากเสือ" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Shinichi Kudo", a_th: "คุโด้ ชินอิจิ" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Gon", a_th: "กอน (Hunter X Hunter)" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Kilua", a_th: "คิรัว (Hunter X Hunter)" },
                { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Hisoka", a_th: "ฮิโซกะ (Hunter X Hunter)" },
                { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Mori Kogoro", a_th: "โมริ โคโกโร่" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Mori Ran", a_th: "โมริ รัน" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Chainsaw Man", a_th: "เชนซอว์แมน" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Conan Edogawa", a_th: "โคนัน" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Monkey D. Luffy", a_th: "มังกี้ ดี ลูฟี่" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Naruto Uzumaki", a_th: "นารูโตะ" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Crayon Shin-chan", a_th: "ชินจัง" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Sailor Moon", a_th: "เซเลอร์มูน" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Muto Yugi", a_th: "มูโต้ ยูกิ" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Blue Eye White Dragon", a_th: "บลูอายไวท์ดราก้อน (Yugi-Oh)" },
                { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Nene-chan", a_th: "เนเน่จัง (Crayon Shin-chan)" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Saitama (One-Punch Man)", a_th: "ไซตามะ" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Satoru Gojo", a_th: "ซาโตรุ โกโจ" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Tanjiro Kamado", a_th: "ทันจิโร่ คามาโดะ" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Muzan Kibutsuji", a_th: "มุซัน (Demon Slayer)" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "L (Death Note)", a_th: "แอล (Death Note)" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Levi Ackerman", a_th: "รีไวล์ แอคเคอร์แมน (Attack on Titan)" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Eren Yeager", a_th: "เอเรน เยเกอร์ (Attack on Titan)" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Edward Elric", a_th: "เอ็ดเวิร์ด เอลริค (Full Metal Alchemist)" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Ichigo Kurosaki", a_th: "อิจิโกะ คุโรซากิ" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Roronoa Zoro", a_th: "โรโรโนอา โซโร" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Kakashi Hatake", a_th: "ฮาตาเกะ คาคาชิ" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Trafalgar D. Water Law", a_th: "ทรัลฟาก้า ดี วอเตอร์ ลอว" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Arale Norimaki", a_th: "หนูน้อย อาราเล่" },
		{ q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Anya Forger", a_th: "อาเนีย ฟอร์เจอร์" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Kenshiro", a_th: "เคนชิโร่ ( the Fist of the North Star)" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Star Platinum", a_th: "สตาร์ แพลตตินั่ม ( Jojo Bizarre Adventure)" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Dio Brando", a_th: "ดิโอ (Jojo Bizarre Adventure)" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Maruko", a_th: "มารุโกะ" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Boruto Uzumaki", a_th: "โบรูโตะ" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Shenron", a_th: "เทพเจ้ามังกร (DragonBall Z)" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Gundam RX78-2", a_th: "กั้นดั้ม RX78/2 (Mobile Suit Gundam)" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Zaku", a_th: "ซาคุ (Mobile Suit Gundam)" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Sōma Yukihira", a_th: "โซมะ ยูกิฮิระ (ยอดนักปรุงโซมะ)" },
        { q: "Who am I? (Anime/Manga)", q_th: "ฉันคือใคร? (อนิเมะ/มังงะ)", a: "Toriko", a_th: "โทริโกะ (โทริโกะ นักล่าอาหาร)" },
		{ q: "Who am I? (Anime/Movie)", q_th: "ฉันคือใคร? (อนิเมะ/ภาพยนตร์)", a: "Totoro", a_th: "โตโตโร่" },
        { q: "Who am I? (Anime/Movie)", q_th: "ฉันคือใคร? (อนิเมะ/ภาพยนตร์)", a: "Wizard Howl", a_th: "พ่อมด ฮาว (Howl Moving Castle)" },
		{ q: "Who am I? (Video Game/Anime)", q_th: "ฉันคือใคร? (วิดีโอเกม/อนิเมะ)", a: "Pikachu", a_th: "พิกาจู" },
                

		// VIDEO GAMES (วิดีโอเกม)
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Mario", a_th: "มาริโอ้" },
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Sonic the Hedgehog", a_th: "โซนิค" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Rock Man", a_th: "ร็อคแมน" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Steve", a_th: "สตีฟ (Minecraft)" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Agent 47", a_th: "เอเจ่น47 (Hitman)" },
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Pac-Man", a_th: "แพ็กแมน" },
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Master Chief", a_th: "มาสเตอร์ชีฟ (Halo)" },
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Kratos", a_th: "เครโทส (God of War)" },
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Lara Croft", a_th: "ลาร่า ครอฟต์ (Tomb Raider)" },
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Link", a_th: "ลิงก์ (The Legend of Zelda)" },
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Zelda", a_th: "เซลด้า (The Legend of Zelda)" },
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Donkey Kong", a_th: "ดองกี้คอง" },
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Crash Bandicoot", a_th: "แครช แบนดิคูต" },
		{ q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Ryu", a_th: "ริว (Street Fighter)" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Yorn", a_th: "ยอร์น (ROV)" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Luigi", a_th: "ลุยจิ" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Kirby", a_th: "เคอร์บี้" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Genji", a_th: "เกนจิ (Overwatch)" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "D.Va", a_th: "ดีวาร์ (Overwatch)" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Dante", a_th: "ดันเต้ (Devil May Cry)" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Yasuo", a_th: "ยาซุโอะ (League of Legends)" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Jinx", a_th: "จิ้งซ์ (League of Legends)" },
        { q: "Who am I? (Video Game)", q_th: "ฉันคือใคร? (วิดีโอเกม)", a: "Cloud Strife", a_th: "คราว สไตร์ฟ (Final Fantasy 7)" },

		// SUPERHEROES & COMIC CHARACTERS (ซูเปอร์ฮีโร่และคอมมิก)
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Spider-Man", a_th: "สไปเดอร์แมน" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Batman", a_th: "แบทแมน" },
                { q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Robin", a_th: "โรบิน" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Superman", a_th: "ซูเปอร์แมน" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Iron Man", a_th: "ไอรอนแมน" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Captain America", a_th: "กัปตันอเมริกา" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Thor", a_th: "ธอร์" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Hulk", a_th: "ฮัลค์" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Wonder Woman", a_th: "วันเดอร์วูแมน" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Wolverine", a_th: "วูล์ฟเวอรีน" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Deadpool", a_th: "เดดพูล" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Black Panther", a_th: "แบล็คแพนเธอร์" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Aquaman", a_th: "อควาแมน" },
		{ q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Black Widow", a_th: "แบล็ค วิโดว์" },
        { q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Scarlet Witch", a_th: "สกาเล็ต วิช" },
        { q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Vision", a_th: "วิชั่น" },
        { q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Groot", a_th: "กรูท" },
                { q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Rocket Raccoon", a_th: "ร็อคเกต แร็คคูน" },
        { q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Hell Boy", a_th: "เฮลบอย" },
        { q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Mark Grayson", a_th: "มาร์ค เกรย์สัน (Invincible)" },
        { q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Omni-Man", a_th: "ออมนิแมน (Invincible)" },
        { q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)", a: "Dr. Manhattan", a_th: "ดอกเตอร์ แมนฮัตตัน" },
		{ q: "Who am I? (Comic Villain)", q_th: "ฉันคือใคร? (วายร้ายคอมมิก)", a: "Harley Quinn", a_th: "ฮาร์ลีย์ ควินน์" },
		{ q: "Who am I? (Comic Villain)", q_th: "ฉันคือใคร? (วายร้ายคอมมิก)", a: "Venom", a_th: "เวนอม" },
		{ q: "Who am I? (Comic Villain)", q_th: "ฉันคือใคร? (วายร้ายคอมมิก)", a: "Thanos", a_th: "ทานอส" },
		{ q: "Who am I? (Comic Villain)", q_th: "ฉันคือใคร? (วายร้ายคอมมิก)", a: "Joker", a_th: "โจ๊กเกอร์" },
		{ q: "Who am I? (Comic Villain)", q_th: "ฉันคือใคร? (วายร้ายคอมมิก)", a: "Loki", a_th: "โลกิ" },

		// WESTERN ANIMATION & CARTOONS (แอนิเมชันตะวันตก)
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Elsa", a_th: "เอลซ่า" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Mickey Mouse", a_th: "มิกกี้ เมาส์" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Buzz Lightyear", a_th: "บัซ ไลท์เยียร์" },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Lightning McQueen", a_th: "ไลนิ่ง แมคควีน" },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Gru", a_th: "กรู (Despicable Me)" },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Olaf", a_th: "โอลาฟ (Frozen)" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Shrek", a_th: "เชร็ค" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Minions", a_th: "มินเนี่ยน" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "SpongeBob SquarePants", a_th: "สพันจ์บ็อบ" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Patrick Star", a_th: "แพทริค สตาร์" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Squidward Tentacles", a_th: "สควิดเวิร์ด" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Shaggy Rogers", a_th: "แชกกี (Scooby-Doo)" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Rick Sanchez", a_th: "ริก ซานเชซ" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Homer Simpson", a_th: "โฮเมอร์ ซิมป์สัน" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Peter Griffin", a_th: "ปีเตอร์ กริฟฟิน" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Scooby-Doo", a_th: "สคูบี้-ดู" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Tom (Tom and Jerry)", a_th: "ทอม (ทอมแอนด์เจอร์รี่)" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Jerry (Tom and Jerry)", a_th: "เจอร์รี่ (ทอมแอนด์เจอร์รี่)" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Bugs Bunny", a_th: "บักส์ บันนี" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Daffy Duck", a_th: "แดฟฟี ดั๊ก" },
		{ q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Popeye", a_th: "ป๊อปอาย" },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Po", a_th: "โป (Kang Fu Panda)" },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Grand Master Oogway", a_th: "ปรมจารย์ อูเกว (Kang Fu Panda) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Master Shifu", a_th: "อาจารย์ ชิฟู (Kang Fu Panda) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Hiro Hamada", a_th: "ฮิโระ ฮามาดะ (Big Hero 6) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Bay Max", a_th: "เบย์แม็ก (Big Hero 6) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Alex", a_th: "อเล็ก (Madagascar) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Marty", a_th: "มาตี้ (Madagascar) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Judy Hopps", a_th: "จูดี้ ฮอป (Zootopia) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Nick Wilde", a_th: "นิค ไวล์ (Zootopia) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Mike Wazowski", a_th: "ไมค์ วาซอว์สกี้ (Monster Inc) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Mama Coco", a_th: "มาม่า โคโค่ (Coco) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Mr Incredible", a_th: "มิสเตอร์ อินครีดิเบิล (The Incredible) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Elastigirl", a_th: "อิลาสติกเกิร์ล (The Incredible) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Frozone", a_th: "โฟรโซน (The Incredible) " },
        { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "Mega Mind", a_th: "เมก้ามายด์ (Megamind) " },
                { q: "Who am I? (Western Animation)", q_th: "ฉันคือใคร? (แอนิเมชันตะวันตก)", a: "ToothLess", a_th: "เขี้ยวกุด (How to train your Dragon) " },
		{ q: "Who am I? (Comic/Animation)", q_th: "ฉันคือใคร? (คอมมิก/แอนิเมชัน)", a: "Garfield", a_th: "กาฟิลด์" },
        { q: "Who am I? (Comic/Animation)", q_th: "ฉันคือใคร? (คอมมิก/แอนิเมชัน)", a: "Ben Tennyson", a_th: "เบ็น 10" },
		{ q: "Who am I? (Literature/Animation)", q_th: "ฉันคือใคร? (วรรณกรรม/แอนิเมชัน)", a: "Winnie the Pooh", a_th: "วินนีเดอะพูห์" },
        { q: "Who am I? (Animation)", q_th: "ฉันคือใคร? (แอนิเมชัน)", a: "ก้านกล้วย", a_th: "ก้านกล้วย" },
        { q: "Who am I? (Comic/Animation)", q_th: "ฉันคือใคร? (คอมมิค/แอนิเมชัน)", a: "ปังปอนด์", a_th: "ปังปอนด์" },

		// MOVIES & TV SERIES (ภาพยนตร์ และ ซีรีส์)
		{ q: "Who am I? (Sci-Fi Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ)", a: "Darth Vader", a_th: "ดาร์ธ เวเดอร์" },
		{ q: "Who am I? (Sci-Fi Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ)", a: "Yoda", a_th: "โยดา" },
		{ q: "Who am I? (Sci-Fi Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ)", a: "Luke Skywalker", a_th: "ลุค สกายวอล์คเกอร์" },
		{ q: "Who am I? (Sci-Fi Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ)", a: "Chewbacca", a_th: "ชิวแบคคา" },
        { q: "Who am I? (Sci-Fi Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ)", a: "Captain Picard", a_th: "กัปตัน พิคาร์ด" },
		{ q: "Who am I? (Sci-Fi Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ)", a: "Marty McFly", a_th: "มาร์ตี้ แมคฟลาย" },
		{ q: "Who am I? (Sci-Fi Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ)", a: "E.T. the Extra-Terrestrial", a_th: "อีที" },
		{ q: "Who am I? (Sci-Fi Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ)", a: "The Terminator", a_th: "เทอร์มิเนเตอร์ / คนเหล็ก" },
		{ q: "Who am I? (Sci-Fi Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ)", a: "Neo (The Matrix)", a_th: "นีโอ (The Matrix)" },
		{ q: "Who am I? (Sci-Fi Movie/Animation)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ/แอนิเมชัน)", a: "Optimus Prime", a_th: "ออปติมัส ไพรม์" },
		{ q: "Who am I? (Sci-Fi Movie/Animation)", q_th: "ฉันคือใคร? (ภาพยนตร์ไซไฟ/แอนิเมชัน)", a: "Bumblebee", a_th: "บัมเบิลบี" },
		{ q: "Who am I? (Action Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์แอ็กชัน)", a: "Jack Sparrow", a_th: "แจ็ค สแปร์โรว์" },
        { q: "Who am I? (Action Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์แอ็กชัน)", a: "Caesar", a_th: "ซีซาร์ (Planet of the Ape)" },
		{ q: "Who am I? (Action Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์แอ็กชัน)", a: "John Wick", a_th: "จอห์น วิค" },
		{ q: "Who am I? (Action Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์แอ็กชัน)", a: "Indiana Jones", a_th: "อินเดียน่า โจนส์" },
		{ q: "Who am I? (Spy Movie/Novel)", q_th: "ฉันคือใคร? (ภาพยนตร์สายลับ/นิยาย)", a: "James Bond", a_th: "เจมส์ บอนด์ (007)" },
		{ q: "Who am I? (Movie/Kaiju)", q_th: "ฉันคือใคร? (ภาพยนตร์/สัตว์ประหลาด)", a: "Godzilla", a_th: "ก็อดซิลล่า" },
		{ q: "Who am I? (Movie/Monster)", q_th: "ฉันคือใคร? (ภาพยนตร์/สัตว์ประหลาด)", a: "King Kong", a_th: "คิงคอง" },
		{ q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "Freddy Krueger", a_th: "เฟรดดี้ ครูเกอร์" },
		{ q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "Jason Voorhees", a_th: "เจสัน วอร์ฮีส์" },
        { q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "Shark", a_th: "ฉลาม (JAW)" },
        { q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "Annabelle", a_th: "แอนนาเบลล์" },
        { q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "The Nun", a_th: "ผี แม่ชี" },
        { q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "Sadako", a_th: "ซาดาโกะ (The Ring)" },
        { q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "Kayako", a_th: "คายาโกะ (Ju On)" },
                { q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "คุณยายวรนาฏ", a_th: "(ทายาทอสูร)" },
        { q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "แม่นาค", a_th: "(แม่นาค พระโขนง)" },
                { q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "ครูพนอ", a_th: "(ลองของ)" },
        { q: "Who am I? (Horror Movie)", q_th: "ฉันคือใคร? (ภาพยนตร์สยองขวัญ)", a: "แพนเค้ก", a_th: "(หอแต๋วแตก)" },
		{ q: "Who am I? (Movie/TV Series)", q_th: "ฉันคือใคร? (ภาพยนตร์/ซีรีส์)", a: "Wednesday Addams", a_th: "เวนส์เดย์ แอดดัมส์" },
		{ q: "Who am I? (TV Series)", q_th: "ฉันคือใคร? (ซีรีส์โทรทัศน์)", a: "Mr. Bean", a_th: "มิสเตอร์บีน" },

		// NOVELS & LITERATURE (นิยาย และ วรรณกรรม)
		{ q: "Who am I? (Novel/Movie)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Harry Potter", a_th: "แฮร์รี่ พอตเตอร์" },
		{ q: "Who am I? (Novel/Movie)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Lord Voldemort", a_th: "ลอร์ด โวลเดอมอร์" },
		{ q: "Who am I? (Novel/Movie)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Hermione Granger", a_th: "เฮอร์ไมโอนี่ เกรนเจอร์" },
        { q: "Who am I? (Novel/Movie)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Draco Malfoy", a_th: "เดรโก มัลฟอย" },
		{ q: "Who am I? (Novel/Movie)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Albus Dumbledore", a_th: "อัลบัส ดัมเบิลดอร์" },
		{ q: "Who am I? (Novel/Movie)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Katniss Everdeen", a_th: "แคตนิส เอเวอร์ดีน" },
		{ q: "Who am I? (Novel/Movie)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Willy Wonka", a_th: "วิลลี่ วองก้า" },
        { q: "Who am I? (Novel/Movie)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Paul Atreides", a_th: "พอล อะเทรดีส (Dune)" },
                { q: "Who am I? (Novel/Tales/Movie/TV Series)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Wukong", a_th: "เห้งเจีย หงอคง (Journey to the West)" },
        { q: "Who am I? (Novel/Tales/Movie/TV Series)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Xuanzang", a_th: "พระถังซัมจั๋ง (Journey to the West)" },
		{ q: "Who am I? (Fantasy Novel/Movie)", q_th: "ฉันคือใคร? (นิยายแฟนตาซี/ภาพยนตร์)", a: "Frodo Baggins", a_th: "โฟรโด แบ๊กกิ้นส์" },
		{ q: "Who am I? (Fantasy Novel/Movie)", q_th: "ฉันคือใคร? (นิยายแฟนตาซี/ภาพยนตร์)", a: "Gandalf", a_th: "แกนดาล์ฟ" },
		{ q: "Who am I? (Fantasy Novel/Movie)", q_th: "ฉันคือใคร? (นิยายแฟนตาซี/ภาพยนตร์)", a: "Legolas", a_th: "เลโกลัส" },
		{ q: "Who am I? (Fantasy Novel/Movie)", q_th: "ฉันคือใคร? (นิยายแฟนตาซี/ภาพยนตร์)", a: "Gollum", a_th: "กอลลัม" },
		{ q: "Who am I? (Horror Novel/Movie)", q_th: "ฉันคือใคร? (นิยายสยองขวัญ/ภาพยนตร์)", a: "Pennywise", a_th: "เพนนีไวส์" },
		{ q: "Who am I? (Classic Novel)", q_th: "ฉันคือใคร? (นิยายคลาสสิก)", a: "Sherlock Holmes", a_th: "เชอร์ล็อก โฮมส์" },
		{ q: "Who am I? (Classic Novel)", q_th: "ฉันคือใคร? (นิยายคลาสสิก)", a: "Frankenstein", a_th: "แฟรงเกนสไตน์" },
		{ q: "Who am I? (Classic Novel/Folklore)", q_th: "ฉันคือใคร? (นิยายคลาสสิก/ตำนาน)", a: "Count Dracula", a_th: "แดร็กคูล่า" },
		{ q: "Who am I? (Novel/Animation)", q_th: "ฉันคือใคร? (นิยาย/แอนิเมชัน)", a: "Tarzan", a_th: "ทาร์ซาน" },
        { q: "Who am I? (Novel/TV Series)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "John Snow", a_th: "จอน สโนว์ (Game of Throne)" },
        { q: "Who am I? (Novel/TV Series)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Daenerys Targaryen", a_th: "แม่มังกร (Game of Throne)" },
        { q: "Who am I? (Novel/TV Series)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Night King", a_th: "ไนท์คิง (Game of Throne)" },
        { q: "Who am I? (Novel/TV Series)", q_th: "ฉันคือใคร? (นิยาย/ภาพยนตร์)", a: "Hannibal Lector", a_th: "ดร.ฮันนิบาล เล็กเตอร์ (Hannibal)" },

		// FAIRY TALES & FOLKLORE (เทพนิยาย และ ตำนานพื้นบ้าน)
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Cinderella", a_th: "ซินเดอเรลล่า" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Snow White", a_th: "สโนว์ไวท์" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Peter Pan", a_th: "ปีเตอร์ แพน" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Ariel", a_th: "แอเรียล (นางเงือกน้อย)" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Aladdin", a_th: "อะลาดิน" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Genie", a_th: "ยักษ์จินนี่ (อะลาดิน)" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Rapunzel", a_th: "ราพันเซล" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Mulan", a_th: "มู่หลาน" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Little Red Riding Hood", a_th: "หนูน้อยหมวกแดง" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Puss in Boots", a_th: "พุส อิน บู๊ทส์" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Tinker Bell", a_th: "ทิงเกอร์เบลล์" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Sleeping Beauty (Aurora)", a_th: "เจ้าหญิงนิทรา (ออโรรา)" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Beast", a_th: "เจ้าชายอสูร (Beauty and the Beast)" },
		{ q: "Who am I? (Fairy Tale/Animation)", q_th: "ฉันคือใคร? (เทพนิยาย/แอนิเมชัน)", a: "Moana", a_th: "โมอาน่า" },
		{ q: "Who am I? (Classic Novel/Animation)", q_th: "ฉันคือใคร? (นิยายคลาสสิก/แอนิเมชัน)", a: "Alice (in Wonderland)", a_th: "อลิซ (อิน วันเดอร์แลนด์)" },
		{ q: "Who am I? (Classic Novel/Animation)", q_th: "ฉันคือใคร? (นิยายคลาสสิก/แอนิเมชัน)", a: "Pinocchio", a_th: "พินอคคิโอ" },
		{ q: "Who am I? (Folklore)", q_th: "ฉันคือใคร? (ตำนานพื้นบ้าน)", a: "Robin Hood", a_th: "โรบินฮู้ด" },
		{ q: "Who am I? (Folklore)", q_th: "ฉันคือใคร? (ตำนานพื้นบ้าน)", a: "Santa Claus", a_th: "ซานตาคลอส" },

		// TOKUSATSU (โทคุซัทสึ)
		{ q: "Who am I? (Tokusatsu)", q_th: "ฉันคือใคร? (โทคุซัทสึ/ฮีโร่แปลงร่าง)", a: "Ultraman", a_th: "อุลตร้าแมน" },
		{ q: "Who am I? (Tokusatsu)", q_th: "ฉันคือใคร? (โทคุซัทสึ/ฮีโร่แปลงร่าง)", a: "Kamen Rider", a_th: "คาเมนไรเดอร์ / ไอ้มดแดง" },
		{ q: "Who am I? (Tokusatsu)", q_th: "ฉันคือใคร? (โทคุซัทสึ/ฮีโร่แปลงร่าง)", a: "Kamen Rider Ryuki", a_th: "คาเมนไรเดอร์ ริวคิ" },
		{ q: "Who am I? (Tokusatsu)", q_th: "ฉันคือใคร? (โทคุซัทสึ/ฮีโร่แปลงร่าง)", a: "Red Ranger / Power Rangers", a_th: "เรดเรนเจอร์ / ขบวนการเรนเจอร์" },
		{ q: "Who am I? (Tokusatsu)", q_th: "ฉันคือใคร? (โทคุซัทสึ/ฮีโร่แปลงร่าง)", a: "Space Sheriff Gavan", a_th: "ตำรวจอวกาศเกียบัน" },
		{ q: "Who am I? (Tokusatsu)", q_th: "ฉันคือใคร? (โทคุซัทสึ/ฮีโร่แปลงร่าง)", a: "Garo", a_th: "กาโร่ อัศวินทองคำ" },
		{ q: "Who am I? (Tokusatsu)", q_th: "ฉันคือใคร? (โทคุซัทสึ/ฮีโร่แปลงร่าง)", a: "Gridman", a_th: "กริดแมน" },
		{ q: "Who am I? (Tokusatsu/Kaiju)", q_th: "ฉันคือใคร? (โทคุซัทสึ/สัตว์ประหลาด)", a: "Mothra", a_th: "มอธร่า" },
		{ q: "Who am I? (Tokusatsu/Kaiju)", q_th: "ฉันคือใคร? (โทคุซัทสึ/สัตว์ประหลาด)", a: "Gamera", a_th: "กาเมร่า" },

		// TOYS & MASCOTS (ของเล่น และ มาสคอต)
		{ q: "Who am I? (Mascot)", q_th: "ฉันคือใคร? (มาสคอต)", a: "Hello Kitty", a_th: "เฮลโล คิตตี้" },
		{ q: "Who am I? (Toy)", q_th: "ฉันคือใคร? (ของเล่น)", a: "Barbie", a_th: "บาร์บี้" },
                { q: "Who am I? (Toy)", q_th: "ฉันคือใคร? (ของเล่น)", a: "Tomagotchi", a_th: "ทามาก็อตจิ" },
		{ q: "Who am I? (Mascot)", q_th: "ฉันคือใคร? (มาสคอต)", a: "Butterbear", a_th: "หมีเนย / บัตเตอร์แบร์" },
		{ q: "Who am I? (Mascot)", q_th: "ฉันคือใคร? (มาสคอต)", a: "Rilakkuma", a_th: "ริลัคคุมะ" },
		{ q: "Who am I? (Mascot)", q_th: "ฉันคือใคร? (มาสคอต)", a: "Gudetama", a_th: "กูเดทามะ (ไข่ขี้เกียจ)" },
		{ q: "Who am I? (Mascot)", q_th: "ฉันคือใคร? (มาสคอต)", a: "My Melody", a_th: "มายเมโลดี้" },
		{ q: "Who am I? (Mascot)", q_th: "ฉันคือใคร? (มาสคอต)", a: "Cinnamoroll", a_th: "ชินนามอนโรล" },
		{ q: "Who am I? (Toy/Mascot)", q_th: "ฉันคือใคร? (ของเล่น/มาสคอต)", a: "Labubu", a_th: "ลาบูบู้" },
                { q: "Who am I? (Toy/Mascot)", q_th: "ฉันคือใคร? (ของเล่น/มาสคอต)", a: "Cry Baby", a_th: "คราย เบบี้" },
		{ q: "Who am I? (Toy/Animation)", q_th: "ฉันคือใคร? (ของเล่น/แอนิเมชัน)", a: "Care Bears", a_th: "แคร์แบร์" },
		{ q: "Who am I? (Toy)", q_th: "ฉันคือใคร? (ของเล่น)", a: "Lego Minifigure", a_th: "ตัวต่อเลโก้" },
		{ q: "Who am I? (Toy/Animation)", q_th: "ฉันคือใคร? (ของเล่น/แอนิเมชัน)", a: "Mr. Potato Head", a_th: "มิสเตอร์ โปเตโต้เฮด" },
		{ q: "Who am I? (Mascot)", q_th: "ฉันคือใคร? (มาสคอต)", a: "Ronald McDonald", a_th: "โรนัลด์ แมคโดนัลด์" },

		// INTERNET MEMES (มีมอินเทอร์เน็ต)
		{ q: "Who am I? (Internet Meme)", q_th: "ฉันคือใคร? (มีมอินเทอร์เน็ต)", a: "Pepe the Frog", a_th: "เปเป้ กบเขียว" },
		{ q: "Who am I? (Internet Meme)", q_th: "ฉันคือใคร? (มีมอินเทอร์เน็ต)", a: "Doge (Kabosu)", a_th: "โดจ (หมามีม Shiba Inu)" },
		{ q: "Who am I? (Internet Meme)", q_th: "ฉันคือใคร? (มีมอินเทอร์เน็ต)", a: "Nyan Cat", a_th: "เนียนแคท" },
		{ q: "Who am I? (Internet Meme)", q_th: "ฉันคือใคร? (มีมอินเทอร์เน็ต)", a: "Gigachad", a_th: "กิกะแชด" },
		{ q: "Who am I? (Internet Meme)", q_th: "ฉันคือใคร? (มีมอินเทอร์เน็ต)", a: "Grumpy Cat", a_th: "กรับปีแคท (แมวหน้าบึ้ง)" },
		{ q: "Who am I? (Internet Meme)", q_th: "ฉันคือใคร? (มีมอินเทอร์เน็ต)", a: "Pop Cat", a_th: "ป็อปแคท" },
		{ q: "Who am I? (Internet Meme)", q_th: "ฉันคือใคร? (มีมอินเทอร์เน็ต)", a: "Smudge the Cat", a_th: "แมวมีมโต๊ะอาหาร (Woman Yelling at a Cat)" },
		{ q: "Who am I? (Internet Meme)", q_th: "ฉันคือใคร? (มีมอินเทอร์เน็ต)", a: "Cheems", a_th: "ชีมส์ (หมามีม)" },
		{ q: "Who am I? (Internet Meme)", q_th: "ฉันคือใคร? (มีมอินเทอร์เน็ต)", a: "Disaster Girl", a_th: "ดิซาสเตอร์เกิร์ล (เด็กหญิงบ้านไฟไหม้)" }
    ],
	persons: [
    	// --- FAMOUS REAL PERSONS ---
		// ACTORS & DIRECTORS
		{ q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Jackie Chan", a_th: "เฉินหลง / แจ็คกี้ ชาน" },
        { q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Robert Pattinson", a_th: "โรเบิร์ต แพททินสัน" },
        { q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Liam Neeson", a_th: "เลียม นีลสัน" },
        { q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Robert Downey Jr.", a_th: "โรเบิร์ต ดาวนี่ จูเนียร์" },
        { q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Matt Daemon", a_th: "แมต เดม่อน" },
        { q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Tony Jaa", a_th: "จา พนม" },
        { q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Tom Holland", a_th: "ทอม ฮอลแลนด์" },
        { q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Anne Hathaway", a_th: "แอน ฮาทาเวย์" },
        { q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Jack Black", a_th: "แจ็ค แบล็ก" },
		{ q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Tom Cruise", a_th: "ทอม ครูซ" },
		{ q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Keanu Reeves", a_th: "คีอานู รีฟส์" },
		{ q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Leonardo DiCaprio", a_th: "ลีโอนาร์โด ดิแคพริโอ" },
		{ q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Dwayne 'The Rock' Johnson", a_th: "เดอะ ร็อก / ดเวย์น จอห์นสัน" },
		{ q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Will Smith", a_th: "วิลล์ สมิธ" },
		{ q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Brad Pitt", a_th: "แบรด พิตต์" },
		{ q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Angelina Jolie", a_th: "แอนเจลินา โจลี" },
        { q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Scarlett Johansson", a_th: "สกาเล็ต โจแฮนสัน" },
		{ q: "Who am I? (Actor)", q_th: "ฉันคือใคร? (นักแสดง)", a: "Rowan Atkinson (Mr. Bean)", a_th: "โรวัน แอตกินสัน / มิสเตอร์บีน" },
		{ q: "Who am I? (Actor/Director)", q_th: "ฉันคือใคร? (นักแสดง/ผู้กำกับ)", a: "Stephen Chow", a_th: "โจว ซิงฉือ" },
		{ q: "Who am I? (Actor/Director)", q_th: "ฉันคือใคร? (ผู้กำกับ)", a: "Christopher Nolan", a_th: "คริสโตเฟอร์ โนแลน" },
        { q: "Who am I? (Actor/Director)", q_th: "ฉันคือใคร? (ผู้กำกับ)", a: "James Gunn", a_th: "เจมส์ กัน" },
        { q: "Who am I? (Actor/Director)", q_th: "ฉันคือใคร? (ผู้กำกับ)", a: "Zack Snyder", a_th: "แซค สไนเดอร์" },
        { q: "Who am I? (Actor/Director)", q_th: "ฉันคือใคร? (ผู้กำกับ)", a: "George Lucas", a_th: "จอร์จ ลูคัส" },
        { q: "Who am I? (Actor/Director)", q_th: "ฉันคือใคร? (ผู้กำกับ)", a: "Nawapol Thamrongrattanarit", a_th: "เต๋อ นวพล" },
		
		// ATHLETES
		{ q: "Who am I? (Athlete)", q_th: "ฉันคือใคร? (นักกีฬา)", a: "Lionel Messi", a_th: "ลิโอเนล เมสซี่" },
		{ q: "Who am I? (Athlete)", q_th: "ฉันคือใคร? (นักกีฬา)", a: "Cristiano Ronaldo", a_th: "คริสเตียโน โรนัลโด" },
		{ q: "Who am I? (Athlete)", q_th: "ฉันคือใคร? (นักกีฬา)", a: "David Beckham", a_th: "เดวิด เบ็คแฮม" },
		{ q: "Who am I? (Athlete)", q_th: "ฉันคือใคร? (นักกีฬา)", a: "Michael Jordan", a_th: "ไมเคิล จอร์แดน" },
		{ q: "Who am I? (Athlete)", q_th: "ฉันคือใคร? (นักกีฬา)", a: "Usain Bolt", a_th: "ยูเซน โบลต์" },
		{ q: "Who am I? (Athlete)", q_th: "ฉันคือใคร? (นักกีฬา)", a: "Tiger Woods", a_th: "ไทเกอร์ วูดส์" },
		{ q: "Who am I? (Athlete)", q_th: "ฉันคือใคร? (นักกีฬา)", a: "Mike Tyson", a_th: "ไมค์ ไทสัน" },
		{ q: "Who am I? (Athlete)", q_th: "ฉันคือใคร? (นักกีฬา)", a: "Manny Pacquiao", a_th: "แมนนี่ ปาเกียว" },
				
		// POP CULTURE & ENTERTAINMENT
		{ q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Michael Jackson", a_th: "ไมเคิล แจ็กสัน" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "อาจารย์แดง กีต้าร์", a_th: "อาจารย์แดง กีต้าร์" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Doja Cat", a_th: "โดจา แคท" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Lady Gaga", a_th: "เลดี้ กาก้า" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "The Weeknd", a_th: "เดอะ วีคเอน" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Kanye West", a_th: "คานเย่ เวส" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Drake", a_th: "เดรค" },
		{ q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Elvis Presley", a_th: "เอลวิส เพรสลีย์" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Freddie Mercury", a_th: "เฟรดดี้ เมอคิวรี่" },
		{ q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Taylor Swift", a_th: "เทย์เลอร์ สวิฟต์" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Mum Jokmok", a_th: "หม่ำ จ๊กม๊ก" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Toe SillyFools", a_th: "โต ซิลลี่ฟูล" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Toon Bodyslam", a_th: "ตูน บอดี้แสลม" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Young Ohm", a_th: "ยังโอม" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "RapAke", a_th: "แรป เอก" },
                { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Mr Beast", a_th: "มิสเตอร์ บีส" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Ishowspeed", a_th: "ไอ โชว์ สปีด" },
                { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Ariana Grande", a_th: "อารีอาน่า กรานเด้" },
                { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Tyler the Creator", a_th: "ไทเลอร์ เดอะ ครีเอเตอร์" },
        { q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Billie Eilish", a_th: "บิลลี่ ไอริช" },
		{ q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Beyoncé", a_th: "บียอนเซ่" },
		{ q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Justin Bieber", a_th: "จัสติน บีเบอร์" },
		{ q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Ed Sheeran", a_th: "เอ็ด ชีรัน" },
		{ q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Bruno Mars", a_th: "บรูโน มาร์ส" },
		{ q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "Lisa (BLACKPINK)", a_th: "ลิซ่า BLACKPINK" },
		{ q: "Who am I? (Pop Culture)", q_th: "ฉันคือใคร? (ป๊อปคัลเจอร์)", a: "PSY", a_th: "ไซ (Gangnam Style)" },
		{ q: "Who am I? (Pop Culture/Chef)", q_th: "ฉันคือใคร? (เชฟชื่อดัง)", a: "Gordon Ramsay", a_th: "กอร์ดอน แรมซีย์" },
		{ q: "Who am I? (Pop Culture/Creator)", q_th: "ฉันคือใคร? (ผู้สร้างการ์ตูน)", a: "Walt Disney", a_th: "วอลต์ ดิสนีย์" },
        { q: "Who am I? (Pop Culture/Creator)", q_th: "ฉันคือใคร? (ผู้สร้างการ์ตูน)", a: "Stan Lee", a_th: "แสตนลีย์" },
				
		// SCIENTISTS, INVENTORS & TECH ICONS
		{ q: "Who am I? (Scientist/Inventor)", q_th: "ฉันคือใคร? (นักวิทยาศาสตร์/นักประดิษฐ์)", a: "Albert Einstein", a_th: "อัลเบิร์ต ไอน์สไตน์" },
		{ q: "Who am I? (Scientist/Inventor)", q_th: "ฉันคือใคร? (นักวิทยาศาสตร์/นักประดิษฐ์)", a: "Isaac Newton", a_th: "ไอแซก นิวตัน" },
		{ q: "Who am I? (Scientist/Inventor)", q_th: "ฉันคือใคร? (นักวิทยาศาสตร์/นักประดิษฐ์)", a: "Thomas Edison", a_th: "โทมัส เอดิสัน" },
		{ q: "Who am I? (Scientist/Inventor)", q_th: "ฉันคือใคร? (นักวิทยาศาสตร์/นักประดิษฐ์)", a: "Galileo Galilei", a_th: "กาลิเลโอ" },
		{ q: "Who am I? (Scientist/Inventor)", q_th: "ฉันคือใคร? (นักวิทยาศาสตร์/นักประดิษฐ์)", a: "Stephen Hawking", a_th: "สตีเฟน ฮอว์กิง" },
		{ q: "Who am I? (Scientist/Inventor)", q_th: "ฉันคือใคร? (นักวิทยาศาสตร์/นักประดิษฐ์)", a: "Steve Jobs", a_th: "สตีฟ จอบส์" },
		{ q: "Who am I? (Scientist/Inventor)", q_th: "ฉันคือใคร? (นักวิทยาศาสตร์/นักประดิษฐ์)", a: "Bill Gates", a_th: "บิล เกตส์" },
		{ q: "Who am I? (Scientist/Inventor)", q_th: "ฉันคือใคร? (นักวิทยาศาสตร์/นักประดิษฐ์)", a: "Elon Musk", a_th: "อีลอน มัสก์" },
		{ q: "Who am I? (Scientist/Inventor)", q_th: "ฉันคือใคร? (นักวิทยาศาสตร์/นักประดิษฐ์)", a: "Mark Zuckerberg", a_th: "มาร์ก ซักเคอร์เบิร์ก" },
				
		// HISTORICAL FIGURES (บุคคลในประวัติศาสตร์)
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Julius Caesar", a_th: "จูเลียส ซีซาร์" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Cleopatra", a_th: "คลีโอพัตรา" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Alexander the Great", a_th: "อเล็กซานเดอร์มหาราช" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Genghis Khan", a_th: "เจงกิส ข่าน" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Neil Armstrong", a_th: "นีล อาร์มสตรอง" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Christopher Columbus", a_th: "คริสโตเฟอร์ โคลัมบัส" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Joan of Arc", a_th: "โจนออฟอาร์ค" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Marco Polo", a_th: "มาร์โค โปโล" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Mother Teresa", a_th: "แม่ชีเทเรซา" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Amelia Earhart", a_th: "อะมีเลีย เอียร์ฮาร์ต" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Anne Frank", a_th: "แอนน์ แฟรงค์" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Socrates", a_th: "โสกราตีส" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Sun Tzu", a_th: "ซุนวู" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Helen Keller", a_th: "เฮเลน เคลเลอร์" },
		{ q: "Who am I? (Historical Figure)", q_th: "ฉันคือใคร? (บุคคลในประวัติศาสตร์)", a: "Rosa Parks", a_th: "โรซา พาร์กส์" },

		// LEADERS (ผู้นำ)
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Napoleon Bonaparte", a_th: "นโปเลียน โบนาปาร์ต" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Abraham Lincoln", a_th: "อับราฮัม ลินคอล์น" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Donald Trump", a_th: "โดนัล ทรัมป์" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Barack Obama", a_th: "บารัค โอบามา" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Queen Elizabeth II", a_th: "สมเด็จพระราชินีนาถเอลิซาเบธที่ 2" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "George Washington", a_th: "จอร์จ วอชิงตัน" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Winston Churchill", a_th: "วินสตัน เชอร์ชิล" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Nelson Mandela", a_th: "เนลสัน แมนเดลา" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Mahatma Gandhi", a_th: "มหาตมะ คานธี" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "John F. Kennedy", a_th: "จอห์น เอฟ. เคนเนดี" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Queen Victoria", a_th: "สมเด็จพระราชินีนาถวิกตอเรีย" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Martin Luther King Jr.", a_th: "มาร์ติน ลูเธอร์ คิง จูเนียร์" },
		{ q: "Who am I? (Leader)", q_th: "ฉันคือใคร? (ผู้นำ)", a: "Che Guevara", a_th: "เช เกวารา" },

		// ARTISTS & WRITERS (ศิลปิน/นักเขียน)
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Leonardo da Vinci", a_th: "เลโอนาร์โด ดาวินชี" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Vincent van Gogh", a_th: "วินเซนต์ แวนโก๊ะ" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "William Shakespeare", a_th: "วิลเลียม เชกสเปียร์" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Pablo Picasso", a_th: "ปาโบล ปิกัสโซ" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Michelangelo", a_th: "ไมเคิลแองเจโล" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Frida Kahlo", a_th: "ฟรีดา คาห์โล" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Salvador Dali", a_th: "ซัลวาดอร์ ดาลี" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Claude Monet", a_th: "โคลด โมเนต์" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Ludwig van Beethoven", a_th: "ลูทวิช ฟัน เบทโธเฟน" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Wolfgang Amadeus Mozart", a_th: "วอล์ฟกัง อะมาเดอุส โมซาร์ท" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Mark Twain", a_th: "มาร์ก ทเวน" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "J. R. R. Tolkien", a_th: "เจ. อาร์. อาร์. โทลคีน" },
		{ q: "Who am I? (Artist)", q_th: "ฉันคือใคร? (ศิลปิน/นักเขียน)", a: "Edgar Allan Poe", a_th: "เอดการ์ แอลลัน โพ" }
		
	],
	char_extreme: [
        // 1
        {
            q: "Who am I? (Villain)", q_th: "ฉันคือใคร? (ตัวร้าย)",
            a: "Darth Vader", a_th: "ดาร์ธ เวเดอร์",
            clues: [
                { en: "Breathing", th: "หายใจ" },
                { en: "Black Armor", th: "เกราะสีดำ" },
                { en: "Chosen One", th: "ผู้ถูกเลือก" },
                { en: "Mustafar", th: "มุสตาฟาร์" },
                { en: "Red Blade", th: "ดาบสีแดง" },
                { en: "Fatherhood", th: "ผู้เป็นพ่อ" }
            ]
        },
        // 2
        {
            q: "Who am I? (Anti-hero)", q_th: "ฉันคือใคร? (แอนตี้ฮีโร่)",
            a: "Lelouch vi Britannia", a_th: "ลูลูช วี บริทาเนีย",
            clues: [
                { en: "Chess Master", th: "เซียนหมากรุก" },
                { en: "Left Eye", th: "ดวงตาซ้าย" },
                { en: "Black Mask", th: "หน้ากากดำ" },
                { en: "Area 11", th: "เขต 11" },
                { en: "Requiem", th: "รีเควียม" },
                { en: "Zero", th: "ซีโร่" }
            ]
        },
        // 3
        {
            q: "Who am I? (TV Drama)", q_th: "ฉันคือใคร? (ซีรีส์ดราม่า)",
            a: "Walter White", a_th: "วอลเตอร์ ไวท์",
            clues: [
                { en: "Teacher", th: "คุณครู" },
                { en: "Albuquerque", th: "อัลบูเคอร์คี" },
                { en: "99.1%", th: "99.1%" },
                { en: "Blue Crystal", th: "ผลึกสีฟ้า" },
                { en: "RV Lab", th: "รถค่ายกล" },
                { en: "Heisenberg", th: "ไฮเซนเบิร์ก" }
            ]
        },
        // 4
        {
            q: "Who am I? (Villain)", q_th: "ฉันคือใคร? (ตัวร้าย)",
            a: "Joker", a_th: "โจ๊กเกอร์",
            clues: [
                { en: "Magic Trick", th: "มายากล" },
                { en: "Purple Suit", th: "สูทสีม่วง" },
                { en: "Acid Vat", th: "บ่อเคมี" },
                { en: "One Bad Day", th: "วันเลวร้าย" },
                { en: "Green Hair", th: "ผมสีเขียว" }
            ]
        },
        // 5
        {
            q: "Who am I? (Detective)", q_th: "ฉันคือใคร? (นักสืบ)",
            a: "Sherlock Holmes", a_th: "เชอร์ล็อก โฮล์มส์",
            clues: [
                { en: "221B", th: "221บี" },
                { en: "Violin", th: "ไวโอลิน" },
                { en: "Nicotine", th: "นิโคติน" },
                { en: "Moriarty", th: "โมริอาร์ตี" },
                { en: "Deduction", th: "การอนุมาน" }
            ]
        },
        // 6
        {
            q: "Who am I? (Anti-hero)", q_th: "ฉันคือใคร? (แอนตี้ฮีโร่)",
            a: "Severus Snape", a_th: "เซเวอรัส สเนป",
            clues: [
                { en: "Half-Blood", th: "เลือดผสม" },
                { en: "Doe", th: "กวางตัวเมีย" },
                { en: "Always", th: "ตลอดไป" },
                { en: "Cauldron", th: "หม้อปรุงยา" },
                { en: "Occlumency", th: "สกัดใจ" }
            ]
        },
        // 7
        {
            q: "Who am I? (Villain)", q_th: "ฉันคือใคร? (ตัวร้าย)",
            a: "Thanos", a_th: "ธานอส",
            clues: [
                { en: "Balance", th: "สมดุล" },
                { en: "Titan", th: "ไททัน" },
                { en: "Dust", th: "ผุยผง" },
                { en: "Snap", th: "ดีดนิ้ว" },
                { en: "Inevitable", th: "ไม่อาจเลี่ยง" }
            ]
        },
        // 8
        {
            q: "Who am I? (Anti-hero)", q_th: "ฉันคือใคร? (แอนตี้ฮีโร่)",
            a: "Light Yagami", a_th: "ยาการิ ไลท์",
            clues: [
                { en: "Potato Chip", th: "มันฝรั่งทอด" },
                { en: "Apples", th: "แอปเปิล" },
                { en: "Kira", th: "คิระ" },
                { en: "Heart Attack", th: "หัวใจวาย" },
                { en: "Justice", th: "ความยุติธรรม" }
            ]
        },
        // 9
        {
            q: "Who am I? (Fantasy Hero)", q_th: "ฉันคือใคร? (ฮีโร่แฟนตาซี)",
            a: "Geralt of Rivia", a_th: "เกรอลท์ แห่ง ริเวีย",
            clues: [
                { en: "White Hair", th: "ผมสีขาว" },
                { en: "Silver Sword", th: "ดาบเงิน" },
                { en: "Gwent", th: "เกวนต์" },
                { en: "Kaer Morhen", th: "แอร์ มอร์เฮน" },
                { en: "Butcher", th: "คนเชือด" }
            ]
        },
        // 10
        {
            q: "Who am I? (Psychopath)", q_th: "ฉันคือใคร? (ฆาตกรโรคจิต)",
            a: "Hannibal Lecter", a_th: "ฮันนิบาล เล็กเตอร์",
            clues: [
                { en: "Chianti", th: "ไวน์เคียนติ" },
                { en: "Fava Beans", th: "ถั่วฟาวา" },
                { en: "Muzzle", th: "ตะกร้อครอบปาก" },
                { en: "Clarice", th: "แคลริซ" },
                { en: "Gourmet", th: "นักชิม" }
            ]
        },
        // 11
        {
            q: "Who am I? (Psychopath)", q_th: "ฉันคือใคร? (ฆาตกรโรคจิต)",
            a: "Patrick Bateman", a_th: "แพทริก เบตแมน",
            clues: [
                { en: "Business Card", th: "นามบัตร" },
                { en: "Raincoat", th: "เสื้อกันฝน" },
                { en: "Chainsaw", th: "เลื่อยยนต์" },
                { en: "Dorsia", th: "ร้านดอร์เซีย" },
                { en: "Wall Street", th: "วอลล์สตรีท" }
            ]
        },
        // 12
        {
            q: "Who am I? (Monster)", q_th: "ฉันคือใคร? (สัตว์ประหลาด)",
            a: "Godzilla", a_th: "ก็อตซิลลา",
            clues: [
                { en: "1954", th: "ปี 1954" },
                { en: "Atomic Ray", th: "ลำแสงอะตอม" },
                { en: "Odo Island", th: "เกาะโอโดะ" },
                { en: "Roar", th: "เสียงคำราม" },
                { en: "King", th: "ราชา" }
            ]
        },
        // 13
        {
            q: "Who am I? (Assassin)", q_th: "ฉันคือใคร? (นักฆ่า)",
            a: "John Wick", a_th: "จอห์น วิค",
            clues: [
                { en: "Gold Coin", th: "เหรียญทอง" },
                { en: "Mustang", th: "รถมัสแตง" },
                { en: "Beagle", th: "หมาบีเกิล" },
                { en: "Baba Yaga", th: "บาบายากา" },
                { en: "Pencil", th: "ดินสอ" }
            ]
        },
        // 14
        {
            q: "Who am I? (Dark Lord)", q_th: "ฉันคือใคร? (จอมมาร)",
            a: "Sauron", a_th: "เซารอน",
            clues: [
                { en: "Flaming Eye", th: "ดวงตาอัคคี" },
                { en: "Barad-dûr", th: "บารัดดูร์" },
                { en: "Mount Doom", th: "ภูเขามรณะ" },
                { en: "Nine Rings", th: "แหวนเก้าวง" },
                { en: "One Ring", th: "แหวนครองภพ" }
            ]
        },
        // 15
        {
            q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)",
            a: "Tony Stark", a_th: "โทนี่ สตาร์ค",
            clues: [
                { en: "Cave", th: "ถ้ำ" },
                { en: "Arc Reactor", th: "เตาปฏิกรณ์" },
                { en: "Cheeseburger", th: "ชีสเบอร์เกอร์" },
                { en: "JARVIS", th: "จาร์วิส" },
                { en: "3000", th: "3000" }
            ]
        },
        // 16
        {
            q: "Who am I? (TV Comedy)", q_th: "ฉันคือใคร? (ซีรีส์ตลก)",
            a: "Michael Scott", a_th: "ไมเคิล สกอตต์",
            clues: [
                { en: "Scranton", th: "สแครนตัน" },
                { en: "Paper", th: "กระดาษ" },
                { en: "Best Boss", th: "เจ้านายยอดเยี่ยม" },
                { en: "She Said", th: "มุกเธอกล่าวไว้" },
                { en: "Dundies", th: "รางวัลดันดี้" }
            ]
        },
        // 17
        {
            q: "Who am I? (Anti-villain)", q_th: "ฉันคือใคร? (ตัวร้าย)",
            a: "Homelander", a_th: "โฮมแลนเดอร์",
            clues: [
                { en: "Flag Cape", th: "ผ้าคลุมลายธง" },
                { en: "Milk", th: "นม" },
                { en: "Vought", th: "วอท" },
                { en: "Compound V", th: "สารคอมพาวด์วี" },
                { en: "Laser Eyes", th: "เลเซอร์สายตา" }
            ]
        },
        // 18
        {
            q: "Who am I? (Anti-hero)", q_th: "ฉันคือใคร? (แอนตี้ฮีโร่)",
            a: "Tyler Durden", a_th: "ไทเลอร์ เดอร์เดน",
            clues: [
                { en: "Pink Soap", th: "สบู่สีชมพู" },
                { en: "First Rule", th: "กฎข้อแรก" },
                { en: "Mayhem", th: "เมย์แฮม" },
                { en: "Project", th: "โปรเจกต์" },
                { en: "Alter Ego", th: "อีกตัวตน" }
            ]
        },
        // 19
        {
            q: "Who am I? (Fantasy Creature)", q_th: "ฉันคือใคร? (สิ่งมีชีวิตแฟนตาซี)",
            a: "Gollum", a_th: "กอลลัม",
            clues: [
                { en: "Sméagol", th: "สมีโกล" },
                { en: "Raw Fish", th: "ปลาดิบ" },
                { en: "Riddles", th: "ปริศนาคำทาย" },
                { en: "Precious", th: "ของรัก" },
                { en: "Caves", th: "ถ้ำมืด" }
            ]
        },
        // 20
        {
            q: "Who am I? (Sci-fi Hero)", q_th: "ฉันคือใคร? (ฮีโร่ไซ-ไฟ)",
            a: "Neo", a_th: "นีโอ",
            clues: [
                { en: "Red Pill", th: "ยาสีแดง" },
                { en: "Green Code", th: "โค้ดสีเขียว" },
                { en: "Thomas", th: "โทมัส" },
                { en: "Bullet Time", th: "หลบกระสุน" },
                { en: "The One", th: "ผู้กอบกู้" }
            ]
        },
        // 21
        {
            q: "Who am I? (Sci-fi Hero)", q_th: "ฉันคือใคร? (ฮีโร่ไซ-ไฟ)",
            a: "Ellen Ripley", a_th: "เอลเลน ริปลีย์",
            clues: [
                { en: "Nostromo", th: "ยานนอสโตรโม" },
                { en: "Jonesy", th: "แมวจอนซี่" },
                { en: "Power Loader", th: "หุ่นยกของ" },
                { en: "Acid Blood", th: "เลือดกรด" },
                { en: "Xenomorph", th: "ซีโนมอร์ฟ" }
            ]
        },
        // 22
        {
            q: "Who am I? (Adventurer)", q_th: "ฉันคือใคร? (นักผจญภัย)",
            a: "Indiana Jones", a_th: "อินเดียนา โจนส์",
            clues: [
                { en: "Whip", th: "แส้" },
                { en: "Fedora", th: "หมวกเฟโดรา" },
                { en: "Snakes", th: "งู" },
                { en: "Boulder", th: "หินยักษ์" },
                { en: "Archeology", th: "โบราณคดี" }
            ]
        },
        // 23
        {
            q: "Who am I? (Pirate)", q_th: "ฉันคือใคร? (โจรสลัด)",
            a: "Captain Jack Sparrow", a_th: "กัปตันแจ็ค สแปร์โรว์",
            clues: [
                { en: "Rum", th: "เหล้ารัม" },
                { en: "Broken Compass", th: "เข็มทิศพัง" },
                { en: "Black Pearl", th: "เรือแบล็กเพิร์ล" },
                { en: "Jar of Dirt", th: "ไหใส่ดิน" },
                { en: "Captain", th: "คำว่ากัปตัน" }
            ]
        },
        // 24
        {
            q: "Who am I? (Dark Wizard)", q_th: "ฉันคือใคร? (พ่อมดศาสตร์มืด)",
            a: "Lord Voldemort", a_th: "ลอร์ด โวลเดอมอร์",
            clues: [
                { en: "Tom Riddle", th: "ทอม ริดเดิล" },
                { en: "Horcrux", th: "ฮอร์ครักซ์" },
                { en: "Green Light", th: "แสงสีเขียว" },
                { en: "Nagini", th: "นากินี" },
                { en: "No Nose", th: "ไร้จมูก" }
            ]
        },
        // 25
        {
            q: "Who am I? (Gaming Legend)", q_th: "ฉันคือใคร? (ตำนานเกม)",
            a: "Kratos", a_th: "เครโทส",
            clues: [
                { en: "Ashes", th: "เถ้าถ่าน" },
                { en: "Chains", th: "โซ่พันแขน" },
                { en: "Red Tattoo", th: "รอยสักสีแดง" },
                { en: "Boy", th: "ไอ้หนู" },
                { en: "Axe", th: "ขวาน" }
            ]
        },
        // 26
        {
            q: "Who am I? (Gaming Hero)", q_th: "ฉันคือใคร? (ฮีโร่เกม)",
            a: "Link", a_th: "ลิงก์",
            clues: [
                { en: "Green Tunic", th: "ชุดเขียว" },
                { en: "Hyrule", th: "ไฮรูล" },
                { en: "Triforce", th: "ไตรฟอร์ซ" },
                { en: "Master Sword", th: "ดาบมาสเตอร์" },
                { en: "Mute", th: "ไม่พูด" }
            ]
        },
        // 27
        {
            q: "Who am I? (Gaming Icon)", q_th: "ฉันคือใคร? (ไอคอนเกม)",
            a: "Mario", a_th: "มาริโอ้",
            clues: [
                { en: "Red Cap", th: "หมวกสีแดง" },
                { en: "Plumber", th: "ช่างประปา" },
                { en: "Mushroom", th: "เห็ด" },
                { en: "Green Pipe", th: "ท่อสีเขียว" },
                { en: "Bowser", th: "โบว์เซอร์" }
            ]
        },
        {
            q: "Who am I? (Gaming Sci-fi)", q_th: "ฉันคือใคร? (ฮีโร่ไซ-ไฟเกม)",
            a: "Master Chief", a_th: "มาสเตอร์ชีฟ",
            clues: [
				{ en: "Heavy Armor", th: "เกราะหนัก" },
				{ en: "John-117", th: "จอห์น-117" },
                { en: "Gold Visor", th: "หน้ากากทอง" },
                { en: "Cortana", th: "คอร์ทานา" },
                { en: "Ringworld", th: "โลกวงแหวน" },
                { en: "Spartan", th: "สปาร์ตัน" }
            ]
        },
        {
            q: "Who am I? (Outlaw)", q_th: "ฉันคือใคร? (สิงห์ปืนไว)",
            a: "Arthur Morgan", a_th: "อาร์เธอร์ มอร์แกน",
            clues: [
                { en: "Van der Linde", th: "แก๊งฟานเดอร์ลินเดอ" },
                { en: "Journal", th: "สมุดบันทึก" },
                { en: "Tuberculosis", th: "วัณโรค" },
                { en: "Redemption", th: "ไถ่บาป" },
                { en: "Deer", th: "กวาง" }
            ]
        },
        // 30
        {
            q: "Who am I? (Gaming Spy)", q_th: "ฉันคือใคร? (สายลับเกม)",
            a: "Solid Snake", a_th: "โซลิด สเนก",
            clues: [
                { en: "Cardboard Box", th: "กล่องกระดาษ" },
                { en: "Bandana", th: "ผ้าโพกหัว" },
                { en: "Foxhound", th: "ฟ็อกซ์ฮาวด์" },
                { en: "Exclamation", th: "เครื่องหมายตกใจ" },
                { en: "Metal Gear", th: "เมทัลเกียร์" }
            ]
        },
        // 31
        {
            q: "Who am I? (Gaming RPG)", q_th: "ฉันคือใคร? (ตัวละคร RPG)",
            a: "Cloud Strife", a_th: "คลาวด์ สไตรฟ์",
            clues: [
                { en: "Buster Sword", th: "ดาบยักษ์" },
                { en: "SOLDIER", th: "ซัลเจอร์" },
                { en: "Mako", th: "พลังงานมาโกะ" },
                { en: "Midgar", th: "มิดการ์" },
                { en: "One Wing", th: "ปีกเดียว" }
            ]
        },
        // 32
        {
            q: "Who am I? (Anime Hero)", q_th: "ฉันคือใคร? (ฮีโร่อิเมะ)",
            a: "Saitama", a_th: "ไซตามะ",
            clues: [
                { en: "Bald", th: "หัวโล้น" },
                { en: "Yellow Suit", th: "ชุดสีเหลือง" },
                { en: "Sale Day", th: "วันลดราคา" },
                { en: "One Punch", th: "หมัดเดียว" },
                { en: "Cyborg Disciple", th: "ศิษย์ไซบอร์ก" }
            ]
        },
        // 33
        {
            q: "Who am I? (Anime Anti-hero)", q_th: "ฉันคือใคร? (แอนตี้ฮีโร่อนิเมะ)",
            a: "Eren Yeager", a_th: "เอเรน เยเกอร์",
            clues: [
                { en: "Basement Key", th: "กุญแจห้องใต้ดิน" },
                { en: "Rumbling", th: "การพิทักษ์พิภพ" },
                { en: "Freedom", th: "อิสรภาพ" },
                { en: "Attack Titan", th: "ไททันจู่โจม" },
                { en: "Sea", th: "ทะเล" }
            ]
        },
        // 34
        {
            q: "Who am I? (Ninja)", q_th: "ฉันคือใคร? (นินจา)",
            a: "Naruto Uzumaki", a_th: "นารูโตะ อุซึมากิ",
            clues: [
                { en: "Ramen", th: "ราเมง" },
                { en: "Nine-Tails", th: "เก้าหาง" },
                { en: "Shadow Clone", th: "คาถาแยกร่าง" },
                { en: "Spiral Sphere", th: "กระสุนวงจักร" },
                { en: "Hokage", th: "โฮคาเงะ" }
            ]
        },
        // 35
        {
            q: "Who am I? (Sorcerer)", q_th: "ฉันคือใคร? (ผู้ใช้ไสยเวท)",
            a: "Satoru Gojo", a_th: "โกะโจ ซาโตรุ",
            clues: [
                { en: "Blindfold", th: "ผ้าปิดตา" },
                { en: "Six Eyes", th: "หกเนตร" },
                { en: "Limitless", th: "ไร้ขีดจำกัด" },
                { en: "Domain", th: "อาณาเขต" },
                { en: "Strongest", th: "แกร่งที่สุด" }
            ]
        },
        // 36
        {
            q: "Who am I? (Alchemist)", q_th: "ฉันคือใคร? (นักเล่นแร่แปรธาตุ)",
            a: "Edward Elric", a_th: "เอ็ดเวิร์ด เอลริก",
            clues: [
                { en: "Automail", th: "แขนขาจักรกล" },
                { en: "Short", th: "ตัวเตี้ย" },
                { en: "Human Transmutation", th: "แปรธาตุมนุษย์" },
                { en: "Red Stone", th: "ศิลาสีแดง" },
                { en: "Fullmetal", th: "เหล็กไหล" }
            ]
        },
        // 37
        {
            q: "Who am I? (Dark Fantasy)", q_th: "ฉันคือใคร? (ดาร์กแฟนตาซี)",
            a: "Guts", a_th: "กัทส์",
            clues: [
                { en: "Dragon Slayer", th: "ดาบฆ่ามังกร" },
                { en: "Brand", th: "ตราประทับ" },
                { en: "One Eye", th: "ตาข้างเดียว" },
                { en: "Eclipse", th: "สุริยุปราคา" },
                { en: "Black Swordsman", th: "นักดาบดำ" }
            ]
        },
        // 38
        {
            q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)",
            a: "Spider-Man", a_th: "สไปเดอร์แมน",
            clues: [
                { en: "Responsibility", th: "ความรับผิดชอบ" },
                { en: "Queens", th: "ควีนส์" },
                { en: "Daily Bugle", th: "เดลี บิวเกิล" },
                { en: "Spider-Sense", th: "สัมผัสพิเศษ" },
                { en: "Web Shooter", th: "เครื่องยิงใย" }
            ]
        },
        // 39
        {
            q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)",
            a: "Batman", a_th: "แบทแมน",
            clues: [
                { en: "Alleyway", th: "ตรอกซอย" },
                { en: "Cave", th: "ถ้ำ" },
                { en: "Orphan", th: "เด็กกำพร้า" },
                { en: "Gotham", th: "ก็อตแธม" },
                { en: "Batarang", th: "แบทเทอแรง" }
            ]
        },
        // 40
        {
            q: "Who am I? (Mutant)", q_th: "ฉันคือใคร? (มนุษย์กลายพันธุ์)",
            a: "Wolverine", a_th: "วูล์ฟเวอรีน",
            clues: [
                { en: "Adamantium", th: "แร่กรงเล็บ" },
                { en: "Healing Factor", th: "พลังฟื้นฟู" },
                { en: "Cigar", th: "ซิก้าร์" },
                { en: "Weapon X", th: "เวพอน X" },
                { en: "Claws", th: "กรงเล็บ" }
            ]
        },
        // 41
        {
            q: "Who am I? (Sci-fi Hero)", q_th: "ฉันคือใคร? (ฮีโร่ไซ-ไฟ)",
            a: "Paul Atreides", a_th: "พอล แอเทรดีส",
            clues: [
                { en: "Spice", th: "สไปซ์" },
                { en: "Arrakis", th: "อาร์ราคิส" },
                { en: "Sandworm", th: "หนอนทราย" },
                { en: "Muad'Dib", th: "มูอัดดิบ" },
                { en: "Blue Eyes", th: "ตาสีฟ้า" }
            ]
        },
        // 42
        {
            q: "Who am I? (TV Lawyer)", q_th: "ฉันคือใคร? (ทนายความ)",
            a: "Saul Goodman", a_th: "ซอล กู๊ดแมน",
            clues: [
                { en: "Slippin' Jimmy", th: "จิมมี่จอมสับปลับ" },
                { en: "Billboard", th: "ป้ายโฆษณา" },
                { en: "Better Call", th: "สายตรงหา" },
                { en: "Cell Phones", th: "มือถือเติมเงิน" },
                { en: "Cinnabon", th: "ซินนาบอน" }
            ]
        },
        // 43
        {
            q: "Who am I? (Serial Killer)", q_th: "ฉันคือใคร? (ฆาตกรต่อเนื่อง)",
            a: "Dexter Morgan", a_th: "เดกซ์เตอร์ มอร์แกน",
            clues: [
                { en: "Blood Spatter", th: "รอยเลือด" },
                { en: "Miami", th: "ไมอามี" },
                { en: "Dark Passenger", th: "ผู้โดยสารสายมืด" },
                { en: "Plastic Wrap", th: "พลาสติกถนอมอาหาร" },
                { en: "Code of Harry", th: "กฎของแฮร์รี่" }
            ]
        },
        // 44
        {
            q: "Who am I? (Gangster)", q_th: "ฉันคือใคร? (เจ้าพ่ออันธพาล)",
            a: "Tommy Shelby", a_th: "ทอมมี่ เชลบี้",
            clues: [
                { en: "Flat Cap", th: "หมวกแก๊ป" },
                { en: "Razor Blade", th: "ใบมีดโกน" },
                { en: "Birmingham", th: "เบอร์มิงแฮม" },
                { en: "Red Right Hand", th: "มือขวาสีแดง" },
                { en: "Cigarette", th: "บุหรี่" }
            ]
        },
        // 45
        {
            q: "Who am I? (Gothic Character)", q_th: "ฉันคือใคร? (ตัวละครกอธิค)",
            a: "Wednesday Addams", a_th: "เวนส์เดย์ แอดดัมส์",
            clues: [
                { en: "Braids", th: "ผมเปีย" },
                { en: "Thing", th: "มือปริศนา" },
                { en: "Nevermore", th: "เนเวอร์มอร์" },
                { en: "Cello", th: "เชลโล" },
                { en: "Black Dress", th: "ชุดเดรสสีดำ" }
            ]
        },
        // 46
        {
            q: "Who am I? (Mad Scientist)", q_th: "ฉันคือใคร? (นักวิทยาศาสตร์สติเฟื่อง)",
            a: "Rick Sanchez", a_th: "ริก แซนเชซ",
            clues: [
                { en: "Portal Gun", th: "ปืนพอร์ทัล" },
                { en: "Green Fluid", th: "น้ำยาเขียว" },
                { en: "Pickle", th: "แตงกวาดอง" },
                { en: "Multiverse", th: "พหุภพ" },
                { en: "Lab Coat", th: "เสื้อกาวน์" }
            ]
        },
        // 47
        {
            q: "Who am I? (Animated TV)", q_th: "ฉันคือใคร? (อนิเมชันทีวี)",
            a: "BoJack Horseman", a_th: "โบแจ็ก ฮอร์สแมน",
            clues: [
                { en: "Hollywoo", th: "ฮอลลีวู" },
                { en: "90s Sitcom", th: "ซิตคอมยุค 90" },
                { en: "Depression", th: "ภาวะซึมเศร้า" },
                { en: "Horse", th: "ม้า" },
                { en: "Horsin' Around", th: "ฮอร์ซินอะราวด์" }
            ]
        },
        // 48
        {
            q: "Who am I? (Sci-fi Kid)", q_th: "ฉันคือใคร? (เด็กไซ-ไฟ)",
            a: "Eleven", a_th: "อีเลฟเวน",
            clues: [
                { en: "Eggo", th: "ขนมรังผึ้ง" },
                { en: "Nosebleed", th: "เลือดกำเดา" },
                { en: "Telekinesis", th: "พลังจิต" },
                { en: "Hawkins", th: "ฮอว์กินส์" },
                { en: "Upside Down", th: "โลกขนาน" }
            ]
        },
        // 49
        {
            q: "Who am I? (Gaming / Animation)", q_th: "ฉันคือใคร? (ตัวละครเกม / แอนิเมชัน)",
            a: "Jinx", a_th: "จิงซ์",
            clues: [
                { en: "Blue Braids", th: "ผมเปียสีฟ้า" },
                { en: "Zaun", th: "ซอน" },
                { en: "Fishbones", th: "ปืนใหญ่จรวด" },
                { en: "Arcane", th: "อาร์เคน" },
                { en: "Graffiti", th: "รอยพ่นสี" }
            ]
        },
        // 50
        {
            q: "Who am I? (Sci-fi Villain)", q_th: "ฉันคือใคร? (ตัวร้ายไซ-ไฟ)",
            a: "Agent Smith", a_th: "เอเจนต์ สมิธ",
            clues: [
                { en: "Earpiece", th: "หูฟังไร้สาย" },
                { en: "Sunglasses", th: "แว่นกันแดด" },
                { en: "Mr. Anderson", th: "มิสเตอร์แอนเดอร์สัน" },
                { en: "Virus", th: "ไวรัส" },
                { en: "Clones", th: "ร่างก๊อปปี้" }
            ]
        },
		// 51
        {
            q: "Who am I? (Gaming Villain)", q_th: "ฉันคือใคร? (ตัวร้ายเกม)",
            a: "Sephiroth", a_th: "เซฟิรอธ",
            clues: [
                { en: "Masamune", th: "มาซามูเนะ" },
                { en: "One Wing", th: "ปีกเดียว" },
                { en: "Meteor", th: "เมทีออร์" },
                { en: "Nibelheim", th: "นีเบลไฮม์" },
                { en: "Jenova", th: "เจโนวา" }
            ]
        },
        // 52
        {
            q: "Who am I? (Gaming AI)", q_th: "ฉันคือใคร? (เอไอเกม)",
            a: "GLaDOS", a_th: "กลาดอส",
            clues: [
                { en: "Cake", th: "เค้ก" },
                { en: "Neurotoxin", th: "ก๊าซพิษ" },
                { en: "Aperture", th: "อะเพอร์เจอร์" },
                { en: "Potato", th: "มันฝรั่ง" },
                { en: "Testing", th: "การทดสอบ" }
            ]
        },
        // 53
        {
            q: "Who am I? (Gaming Hero)", q_th: "ฉันคือใคร? (ฮีโร่เกม)",
            a: "Leon S. Kennedy", a_th: "ลีออน เอส เคนเนดี",
            clues: [
                { en: "RPD", th: "อาร์พีดี" },
                { en: "Herbs", th: "สมุนไพร" },
                { en: "Suplex", th: "ซูเพล็กซ์" },
                { en: "Ada", th: "เอด้า" },
                { en: "Bingo", th: "บิงโก" }
            ]
        },
        // 54
        {
            q: "Who am I? (Gaming Android)", q_th: "ฉันคือใคร? (แอนดรอยด์เกม)",
            a: "2B", a_th: "ทูบี (2B)",
            clues: [
                { en: "Blindfold", th: "ผ้าปิดตา" },
                { en: "YoRHa", th: "ยอร์ฮา" },
                { en: "Pod", th: "พ็อด" },
                { en: "Machines", th: "จักรกล" },
                { en: "Glory", th: "เกียรติภูมิ" }
            ]
        },
        // 55
        {
            q: "Who am I? (Gaming Hero)", q_th: "ฉันคือใคร? (ฮีโร่เกม)",
            a: "Doom Slayer", a_th: "ดูมสเลเยอร์",
            clues: [
                { en: "Shotgun", th: "ลูกซอง" },
                { en: "Demons", th: "ปีศาจ" },
                { en: "Mars", th: "ดาวอังคาร" },
                { en: "BFG", th: "บีเอฟจี" },
                { en: "Rip Tear", th: "ฉีกกระชาก" }
            ]
        },
        // 56
        {
            q: "Who am I? (Gaming Sci-fi)", q_th: "ฉันคือใคร? (ตัวละครไซ-ไฟเกม)",
            a: "Gordon Freeman", a_th: "กอร์ดอน ฟรีแมน",
            clues: [
                { en: "Crowbar", th: "ชะแลง" },
                { en: "Gravity Gun", th: "ปืนแรงโน้มถ่วง" },
                { en: "HEV Suit", th: "ชุดป้องกัน" },
                { en: "Black Mesa", th: "แบล็กเมซา" },
                { en: "Mute", th: "ไม่พูด" }
            ]
        },
        // 57
        {
            q: "Who am I? (Gaming Adventurer)", q_th: "ฉันคือใคร? (นักผจญภัยเกม)",
            a: "Lara Croft", a_th: "ลาร่า ครอฟต์",
            clues: [
                { en: "Dual Pistols", th: "ปืนคู่" },
                { en: "Tomb", th: "สุสานโบราณ" },
                { en: "Croft Manor", th: "คฤหาสน์ครอฟต์" },
                { en: "Relics", th: "วัตถุโบราณ" },
                { en: "Survivor", th: "ผู้รอดชีวิต" }
            ]
        },
        // 58
        {
            q: "Who am I? (Gaming Fighter)", q_th: "ฉันคือใคร? (นักสู้เกม)",
            a: "Sub-Zero", a_th: "ซับซีโร่",
            clues: [
                { en: "Ice", th: "น้ำแข็ง" },
                { en: "Lin Kuei", th: "หลินกุ้ย" },
                { en: "Spine", th: "กระดูกสันหลัง" },
                { en: "Freeze", th: "แช่แข็ง" },
                { en: "Blue Ninja", th: "นินจาสีฟ้า" }
            ]
        },
        // 59
        {
            q: "Who am I? (Gaming Fighter)", q_th: "ฉันคือใคร? (นักสู้เกม)",
            a: "Scorpion", a_th: "สกอร์เปียน",
            clues: [
                { en: "Spear", th: "ฉมวก" },
                { en: "Hellfire", th: "ไฟนรก" },
                { en: "Shirai Ryu", th: "ชิไรริว" },
                { en: "Vengeance", th: "ล้างแค้น" },
                { en: "Get Here", th: "มานี่" }
            ]
        },
        // 60
        {
            q: "Who am I? (Gaming Survivor)", q_th: "ฉันคือใคร? (ผู้รอดชีวิตเกม)",
            a: "Ellie", a_th: "เอลลี่",
            clues: [
                { en: "Switchblade", th: "มีดพับ" },
                { en: "Bite Mark", th: "รอยกัด" },
                { en: "Guitar", th: "กีตาร์" },
                { en: "Immune", th: "ภูมิคุ้มกัน" },
                { en: "Fireflies", th: "หิ่งห้อย" }
            ]
        },
        // 61
        {
            q: "Who am I? (Anime)", q_th: "ฉันคือใคร? (อนิเมะ)",
            a: "Levi Ackerman", a_th: "รีไวล์ แอคเคอร์แมน",
            clues: [
                { en: "Cleaning", th: "ทำความสะอาด" },
                { en: "Cravat", th: "ผ้าผูกคอ" },
                { en: "Spin", th: "หมุนตัว" },
                { en: "Tea", th: "น้ำชา" },
                { en: "Strongest", th: "แกร่งที่สุด" }
            ]
        },
        // 62
        {
            q: "Who am I? (Anime)", q_th: "ฉันคือใคร? (อนิเมะ)",
            a: "Kakashi Hatake", a_th: "ฮาตาเกะ คาคาชิ",
            clues: [
                { en: "Book", th: "หนังสืออ่านเล่น" },
                { en: "Sharingan", th: "เนตรวงแหวน" },
                { en: "Mask", th: "หน้ากาก" },
                { en: "Lightning", th: "สายฟ้า" },
                { en: "Copy", th: "ก๊อปปี้" }
            ]
        },
        // 63
        {
            q: "Who am I? (Anime Hero)", q_th: "ฉันคือใคร? (ฮีโร่อิเมะ)",
            a: "Roronoa Zoro", a_th: "โรโรโนอา โซโล",
            clues: [
                { en: "Three Swords", th: "ดาบสามเล่ม" },
                { en: "Bandana", th: "ผ้าโพกหัว" },
                { en: "Directionless", th: "หลงทาง" },
                { en: "Marimo", th: "มาริโมะ" },
                { en: "Sake", th: "สาเก" }
            ]
        },
        // 64
        {
            q: "Who am I? (Anime Anti-hero)", q_th: "ฉันคือใคร? (แอนตี้ฮีโร่อนิเมะ)",
            a: "Itachi Uchiha", a_th: "อุจิวะ อิทาจิ",
            clues: [
                { en: "Crows", th: "อีกา" },
                { en: "Dango", th: "ดังโงะ" },
                { en: "Massacre", th: "สังหารหมู่" },
                { en: "Illusion", th: "คาถาลวงตา" },
                { en: "Brother", th: "น้องชาย" }
            ]
        },
        // 65
        {
            q: "Who am I? (Anime Detective)", q_th: "ฉันคือใคร? (นักสืบอนิเมะ)",
            a: "L", a_th: "แอล (L)",
            clues: [
                { en: "Sweets", th: "ของหวาน" },
                { en: "Barefoot", th: "เท้าเปล่า" },
                { en: "Crouch", th: "นั่งยอง" },
                { en: "Kira", th: "คิระ" },
                { en: "Alias", th: "นามแฝง" }
            ]
        },
        // 66
        {
            q: "Who am I? (Anime Villain)", q_th: "ฉันคือใคร? (ตัวร้ายอนิเมะ)",
            a: "Makima", a_th: "มาคิมะ",
            clues: [
                { en: "Chains", th: "โซ่" },
                { en: "Dogs", th: "สุนัข" },
                { en: "Control", th: "ควบคุม" },
                { en: "Bang", th: "ปัง" },
                { en: "Public Safety", th: "นักล่าทางการ" }
            ]
        },
        // 67
        {
            q: "Who am I? (Anime Villain)", q_th: "ฉันคือใคร? (ตัวร้ายอนิเมะ)",
            a: "Hisoka", a_th: "ฮิโซกะ",
            clues: [
                { en: "Bungee Gum", th: "บันจี้กัม" },
                { en: "Cards", th: "ไพ่" },
                { en: "Face Paint", th: "เพนต์หน้า" },
                { en: "Spiders", th: "แมงมุม" },
                { en: "Magician", th: "นักมายากล" }
            ]
        },
        // 68
        {
            q: "Who am I? (Anime Hero)", q_th: "ฉันคือใคร? (ฮีโร่อิเมะ)",
            a: "Roy Mustang", a_th: "รอย มัสแตง",
            clues: [
                { en: "Gloves", th: "ถุงมือ" },
                { en: "Snap", th: "ดีดนิ้ว" },
                { en: "Flames", th: "เปลวไฟ" },
                { en: "Miniskirts", th: "กระโปรงสั้น" },
                { en: "Colonel", th: "พันเอก" }
            ]
        },
        // 69
        {
            q: "Who am I? (Anime Villain)", q_th: "ฉันคือใคร? (ตัวร้ายอนิเมะ)",
            a: "Frieza", a_th: "ฟรีเซอร์",
            clues: [
                { en: "Forms", th: "ร่างแปลง" },
                { en: "Emperor", th: "จักรพรรดิ" },
                { en: "Planet Trade", th: "ค้าดวงดาว" },
                { en: "Tail", th: "หาง" },
                { en: "Monkeys", th: "พวกลิง" }
            ]
        },
        // 70
        {
            q: "Who am I? (Anime Bounty Hunter)", q_th: "ฉันคือใคร? (นักล่าค่าหัวอนิเมะ)",
            a: "Spike Spiegel", a_th: "สไปค์ สปีเกล",
            clues: [
                { en: "Bebop", th: "บีบ็อป" },
                { en: "Cigarette", th: "บุหรี่" },
                { en: "Jeet Kune Do", th: "จีทคุนโด้" },
                { en: "Space", th: "อวกาศ" },
                { en: "Syndicate", th: "ซินดิเคต" }
            ]
        },
        // 71
        {
            q: "Who am I? (Sci-fi Hero)", q_th: "ฉันคือใคร? (ฮีโร่ไซ-ไฟ)",
            a: "Luke Skywalker", a_th: "ลุค สกายวอล์คเกอร์",
            clues: [
                { en: "Tatooine", th: "ทาทูอีน" },
                { en: "Green Blade", th: "ดาบสีเขียว" },
                { en: "Prosthetic Hand", th: "มือเทียม" },
                { en: "X-Wing", th: "ยานเอ็กซ์วิง" },
                { en: "Twin", th: "ฝาแฝด" }
            ]
        },
        // 72
        {
            q: "Who am I? (Sci-fi Master)", q_th: "ฉันคือใคร? (ปรมาจารย์ไซ-ไฟ)",
            a: "Yoda", a_th: "โยดา",
            clues: [
                { en: "Swamp", th: "หนองน้ำ" },
                { en: "Cane", th: "ไม้เท้า" },
                { en: "Syntax", th: "ไวยากรณ์" },
                { en: "Grandmaster", th: "ปรมาจารย์" },
                { en: "Dagobah", th: "ดาโกบาห์" }
            ]
        },
        // 73
        {
            q: "Who am I? (Sci-fi Bounty Hunter)", q_th: "ฉันคือใคร? (นักล่าค่าหัวไซ-ไฟ)",
            a: "Boba Fett", a_th: "โบบา เฟตต์",
            clues: [
                { en: "Mandalorian", th: "แมนดาลอเรียน" },
                { en: "Jetpack", th: "เจ็ตแพ็ก" },
                { en: "Sarlacc", th: "ซาร์ลัก" },
                { en: "Bounty", th: "ค่าหัว" },
                { en: "Clone", th: "ร่างโคลน" }
            ]
        },
        // 74
        {
            q: "Who am I? (Sci-fi Hero)", q_th: "ฉันคือใคร? (ฮีโร่ไซไฟ)",
            a: "Terminator (T-800)", a_th: "คนเหล็ก (T-800)",
            clues: [
                { en: "Sunglasses", th: "แว่นดำ" },
                { en: "Leather Jacket", th: "แจ็กเก็ตหนัง" },
                { en: "Shotgun", th: "ลูกซอง" },
                { en: "Skynet", th: "สกายเน็ต" },
                { en: "Be Back", th: "จะกลับมา" }
            ]
        },
        // 75
        {
            q: "Who am I? (Sci-fi Hunter)", q_th: "ฉันคือใคร? (นักล่าไซ-ไฟ)",
            a: "Predator", a_th: "พรีเดเตอร์",
            clues: [
                { en: "Cloak", th: "พรางตัว" },
                { en: "Dreadlocks", th: "ผมเดรดล็อกส์" },
                { en: "Mandibles", th: "กราม" },
                { en: "Thermal", th: "อินฟราเรด" },
                { en: "Trophy", th: "ถ้วยรางวัล" }
            ]
        },
        // 76
        {
            q: "Who am I? (Fantasy Hero)", q_th: "ฉันคือใคร? (ฮีโร่แฟนตาซี)",
            a: "Frodo Baggins", a_th: "โฟรโด แบ๊กกิ้นส์",
            clues: [
                { en: "Shire", th: "ไชร์" },
                { en: "Mithril", th: "มิธริล" },
                { en: "Sting", th: "ดาบสติง" },
                { en: "Burden", th: "ภาระ" },
                { en: "Ringbearer", th: "ผู้ถือแหวน" }
            ]
        },
        // 77
        {
            q: "Who am I? (Fantasy Archer)", q_th: "ฉันคือใคร? (พลธนูแฟนตาซี)",
            a: "Legolas", a_th: "เลโกลัส",
            clues: [
                { en: "Bow", th: "ธนู" },
                { en: "Elf", th: "เอลฟ์" },
                { en: "Shield Surfing", th: "สไลด์โล่" },
                { en: "Gimli", th: "กิมลี" },
                { en: "Count", th: "นับจำนวนตาย" }
            ]
        },
        // 78
        {
            q: "Who am I? (Fantasy Wizard)", q_th: "ฉันคือใคร? (พ่อมดแฟนตาซี)",
            a: "Gandalf", a_th: "แกนดัล์ฟ",
            clues: [
                { en: "Staff", th: "ไม้เท้า" },
                { en: "Fireworks", th: "ดอกไม้ไฟ" },
                { en: "Gray", th: "สีเทา" },
                { en: "Balrog", th: "บัลร็อก" },
                { en: "Eagles", th: "นกอินทรี" }
            ]
        },
        // 79
        {
            q: "Who am I? (Fantasy Wizard)", q_th: "ฉันคือใคร? (พ่อมดแฟนตาซี)",
            a: "Harry Potter", a_th: "แฮร์รี่ พอตเตอร์",
            clues: [
                { en: "Scar", th: "รอยแผลเป็น" },
                { en: "Glasses", th: "แว่นตา" },
                { en: "Owl", th: "นกฮูก" },
                { en: "Seeker", th: "ซีกเกอร์" },
                { en: "Parseltongue", th: "พาร์เซลทัง" }
            ]
        },
        // 80
        {
            q: "Who am I? (Fantasy Witch)", q_th: "ฉันคือใคร? (แม่มดแฟนตาซี)",
            a: "Hermione Granger", a_th: "เฮอร์ไมโอนี่ เกรนเจอร์",
            clues: [
                { en: "Books", th: "หนังสือ" },
                { en: "Mudblood", th: "เลือดสีโคลน" },
                { en: "Time-Turner", th: "นาฬิกาย้อนเวลา" },
                { en: "Leviosa", th: "เลวีโอซ่า" },
                { en: "Cat", th: "แมว" }
            ]
        },
        // 81
        {
            q: "Who am I? (Fantasy Warrior)", q_th: "ฉันคือใคร? (นักรบแฟนตาซี)",
            a: "Jon Snow", a_th: "จอน สโนว์",
            clues: [
                { en: "Bastard", th: "ลูกนอกสมรส" },
                { en: "Direwolf", th: "หมาป่าโลกันตร์" },
                { en: "Wall", th: "กำแพง" },
                { en: "Nothing", th: "ไม่รู้อะไรเลย" },
                { en: "Watch", th: "หน่วยพิทักษ์" }
            ]
        },
        // 82
        {
            q: "Who am I? (Fantasy Queen)", q_th: "ฉันคือใคร? (ราชินีแฟนตาซี)",
            a: "Daenerys Targaryen", a_th: "แดเนอริส ทาร์แกเรียน",
            clues: [
                { en: "Dragons", th: "มังกร" },
                { en: "Fire", th: "ไฟ" },
                { en: "Silver Hair", th: "ผมสีเงิน" },
                { en: "Breaker", th: "ผู้ปลดแอก" },
                { en: "Throne", th: "บัลลังก์" }
            ]
        },
        // 83
        {
            q: "Who am I? (TV Politician)", q_th: "ฉันคือใคร? (นักการเมืองซีรีส์)",
            a: "Tyrion Lannister", a_th: "ทีเรียน แลนนิสเตอร์",
            clues: [
                { en: "Wine", th: "ไวน์" },
                { en: "Scars", th: "รอยแผลเป็น" },
                { en: "Crossbow", th: "หน้าไม้" },
                { en: "Hand", th: "หัตถ์" },
                { en: "Debts", th: "หนี้สิน" }
            ]
        },
        // 84
        {
            q: "Who am I? (Horror Villain)", q_th: "ฉันคือใคร? (ตัวร้ายสยองขวัญ)",
            a: "Freddy Krueger", a_th: "เฟรดดี้ ครูเกอร์",
            clues: [
                { en: "Boiler Room", th: "ห้องหม้อไท" },
                { en: "Stripes", th: "เสื้อลายขวาง" },
                { en: "Fedora", th: "หมวกเฟโดรา" },
                { en: "Claws", th: "กรงเล็บเหล็ก" },
                { en: "Dreams", th: "ความฝัน" }
            ]
        },
        // 85
        {
            q: "Who am I? (Horror Villain)", q_th: "ฉันคือใคร? (ตัวร้ายสยองขวัญ)",
            a: "Jason Voorhees", a_th: "เจสัน วอร์ฮีส์",
            clues: [
                { en: "Hockey Mask", th: "หน้ากากฮอกกี้" },
                { en: "Machete", th: "มีดพร้า" },
                { en: "Camp", th: "ค่ายพักแรม" },
                { en: "Friday", th: "วันศุกร์" },
                { en: "Lake", th: "ทะเลสาบ" }
            ]
        },
        // 86
        {
            q: "Who am I? (Horror Villain)", q_th: "ฉันคือใคร? (ตัวร้ายสยองขวัญ)",
            a: "Michael Myers", a_th: "ไมเคิล ไมเยอร์ส",
            clues: [
                { en: "Shatner Mask", th: "หน้ากากขาว" },
                { en: "Coveralls", th: "ชุดหมี" },
                { en: "Kitchen Knife", th: "มีดทำครัว" },
                { en: "Halloween", th: "ฮาโลวีน" },
                { en: "Silent", th: "เงียบ" }
            ]
        },
        // 87
        {
            q: "Who am I? (Horror Clown)", q_th: "ฉันคือใคร? (ตัวตลกสยองขวัญ)",
            a: "Pennywise", a_th: "เพนนีไวส์",
            clues: [
                { en: "Balloon", th: "ลูกโป่ง" },
                { en: "Sewers", th: "ท่อระบายน้ำ" },
                { en: "Derry", th: "เมืองเดอร์รี่" },
                { en: "Clown", th: "ตัวตลก" },
                { en: "Float", th: "ลอยได้" }
            ]
        },
        // 88
        {
            q: "Who am I? (Horror Killer)", q_th: "ฉันคือใคร? (ฆาตกรสยองขวัญ)",
            a: "Ghostface", a_th: "โกสต์เฟซ",
            clues: [
                { en: "Phone Call", th: "โทรศัพท์" },
                { en: "Voice Changer", th: "เครื่องแปลงเสียง" },
                { en: "Woodsboro", th: "วูดส์โบโร" },
                { en: "Robe", th: "ชุดคลุม" },
                { en: "Movies", th: "หนังสยองขวัญ" }
            ]
        },
        // 89
        {
            q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)",
            a: "Superman", a_th: "ซูเปอร์แมน",
            clues: [
                { en: "Cape", th: "ผ้าคลุม" },
                { en: "S Symbol", th: "สัญลักษณ์เอส" },
                { en: "Kryptonite", th: "คริปโตไนต์" },
                { en: "Reporter", th: "นักข่าว" },
                { en: "Metropolis", th: "เมโทรโพลิส" }
            ]
        },
        // 90
        {
            q: "Who am I? (Superhero)", q_th: "ฉันคือใคร? (ซูเปอร์ฮีโร่)",
            a: "Wonder Woman", a_th: "วันเดอร์วูแมน",
            clues: [
                { en: "Lasso", th: "บ่วงบาศ" },
                { en: "Bracelets", th: "กำไล" },
                { en: "Themyscira", th: "เทอมิสกีร่า" },
                { en: "Shield", th: "โล่" },
                { en: "Amazon", th: "แอมะซอน" }
            ]
        },
        // 91
        {
            q: "Who am I? (Anti-hero)", q_th: "ฉันคือใคร? (แอนตี้ฮีโร่)",
            a: "Deadpool", a_th: "เดดพูล",
            clues: [
                { en: "Chimichanga", th: "ชิมิชางก้า" },
                { en: "Katanas", th: "ดาบคู่" },
                { en: "Fourth Wall", th: "กำแพงที่สี่" },
                { en: "Mercenary", th: "ทหารรับจ้าง" },
                { en: "Regeneration", th: "ฟื้นฟูร่างกาย" }
            ]
        },
        // 92
        {
            q: "Who am I? (Comic Villain)", q_th: "ฉันคือใคร? (ตัวร้ายคอมมิก)",
            a: "Magneto", a_th: "แม็กนีโต",
            clues: [
                { en: "Helmet", th: "หมวกกันน็อก" },
                { en: "Metal", th: "โลหะ" },
                { en: "Brotherhood", th: "ภราดรภาพ" },
                { en: "Chess", th: "หมากรุก" },
                { en: "Mutant", th: "มนุษย์กลายพันธุ์" }
            ]
        },
        // 93
        {
            q: "Who am I? (Comic Anti-hero)", q_th: "ฉันคือใคร? (แอนตี้ฮีโร่คอมมิก)",
            a: "Venom", a_th: "เวน่อม",
            clues: [
                { en: "Symbiote", th: "ซิมไบโอต" },
                { en: "Tongue", th: "ลิ้น" },
                { en: "Sound", th: "คลื่นเสียง" },
                { en: "Chocolate", th: "ช็อกโกแลต" },
                { en: "We Are", th: "พวกเราคือ" }
            ]
        },
        // 94
        {
            q: "Who am I? (Comic Anti-hero)", q_th: "ฉันคือใคร? (แอนตี้ฮีโร่คอมมิก)",
            a: "Rorschach", a_th: "รอร์แชค",
            clues: [
                { en: "Inkblot", th: "หยดหมึก" },
                { en: "Journal", th: "สมุดบันทึก" },
                { en: "Trenchcoat", th: "เสื้อโค้ต" },
                { en: "Compromise", th: "ประนีประนอม" },
                { en: "Watchmen", th: "วอตช์เมน" }
            ]
        },
        // 95
        {
            q: "Who am I? (Movie Boxer)", q_th: "ฉันคือใคร? (นักมวยจอเงิน)",
            a: "Rocky Balboa", a_th: "ร็อคกี้ บัลบัว",
            clues: [
                { en: "Steps", th: "ขั้นบันได" },
                { en: "Meat", th: "ซากเนื้อ" },
                { en: "Eye", th: "ดวงตา" },
                { en: "Apollo", th: "อะพอลโล" },
                { en: "Adrian", th: "เอเดรียน" }
            ]
        },
        // 96
        {
            q: "Who am I? (Movie Soldier)", q_th: "ฉันคือใคร? (ทหารจอเงิน)",
            a: "John Rambo", a_th: "จอห์น แรมโบ้",
            clues: [
                { en: "Bow", th: "ธนู" },
                { en: "Headband", th: "ผ้าโพกหัว" },
                { en: "Jungle", th: "ป่าทึบ" },
                { en: "First Blood", th: "เลือดแรก" },
                { en: "Survival", th: "เอาชีวิตรอด" }
            ]
        },
        // 97
        {
            q: "Who am I? (Movie Gladiator)", q_th: "ฉันคือใคร? (แกลดิเอเตอร์)",
            a: "Maximus", a_th: "แม็กซิมัส",
            clues: [
                { en: "Gladiator", th: "นักรบเดนตาย" },
                { en: "Wheat", th: "รวงข้าว" },
                { en: "Arena", th: "ลานประลอง" },
                { en: "Vengeance", th: "แก้แค้น" },
                { en: "Entertained", th: "บันเทิงไหม" }
            ]
        },
        // 98
        {
            q: "Who am I? (Animated TV)", q_th: "ฉันคือใคร? (อนิเมชันทีวี)",
            a: "Homer Simpson", a_th: "โฮเมอร์ ซิมป์สัน",
            clues: [
                { en: "Donuts", th: "โดนัท" },
                { en: "D'oh", th: "โด๊ะ" },
                { en: "Nuclear", th: "นิวเคลียร์" },
                { en: "Duff", th: "เบียร์ดัฟฟ์" },
                { en: "Choke", th: "บีบคอ" }
            ]
        },
        // 99
        {
            q: "Who am I? (Animated Fantasy)", q_th: "ฉันคือใคร? (แฟนตาซีอนิเมชัน)",
            a: "Shrek", a_th: "เชร็ค",
            clues: [
                { en: "Swamp", th: "หนองน้ำ" },
                { en: "Onion", th: "หัวหอม" },
                { en: "Ogre", th: "ยักษ์โอกร" },
                { en: "Donkey", th: "ลา" },
                { en: "Fiona", th: "ฟิโอน่า" }
            ]
        },
        // 100
        {
            q: "Who am I? (Animated TV)", q_th: "ฉันคือใคร? (อนิเมชันทีวี)",
            a: "Eric Cartman", a_th: "เอริก คาร์ตแมน",
            clues: [
                { en: "Cheesy Poufs", th: "ขนมชีสพัฟส์" },
                { en: "Authoritah", th: "อำนาจเด็ดขาด" },
                { en: "Red Jacket", th: "แจ็กเก็ตแดง" },
                { en: "Chili", th: "ชิลลี่" },
                { en: "South Park", th: "เซาท์พาร์ก" }
            ]
        }
    ],
	facts: [
        { q: "In 1989, what product did the Soviet Union exchange a fleet of 17 submarines and warships for?", a: "Pepsi" },
        { q: "What animal did the Polish army officially enlist as a Private during WWII, who even helped carry artillery ammo?", a: "A Syrian Brown Bear (Wojtek)" },
        { q: "In 1859, the US and Great Britain almost went to full-scale war over the shooting of what animal?", a: "A Pig (The Pig War)" },
        { q: "Who did the Australian military declare a literal war against in 1932 (and lost)?", a: "Emus" },
        { q: "During WWII, what animal did the US military attempt to strap tiny incendiary bombs to in order to burn down Japanese cities?", a: "Bats" },
        { q: "In 1866, the Liechtenstein army went to war with 80 men. How many men did they return with?", a: "81 (They made an Italian friend)" },
        { q: "What did Roman Emperor Caligula officially declare war against, ordering his soldiers to stab it?", a: "The Sea (Poseidon)" },
        { q: "In 1998, a group of 12 people in a remote Yemen village sued NASA, claiming they inherited what from their ancestors?", a: "The Planet Mars" },
        { q: "Before he was Pope, Pope Gregory IX declared what animal to be an instrument of Satan, leading to mass exterminations?", a: "Cats" },
        { q: "What object was Lord Byron famously forced to keep as a pet at Cambridge University because dogs were banned?", a: "A Bear" },
        { q: "During the 18th century, wealthy British landowners hired people to live in their gardens and act as what?", a: "Ornamental Hermits" },
        { q: "In 1919, 21 people died in Boston when a giant storage tank burst, flooding the streets with 2.3 million gallons of what?", a: "Molasses" },
        { q: "What was the original medical use for the chainsaw when it was invented in the late 18th century?", a: "Assisting in Childbirth (Symphysiotomy)" },
        { q: "In 1814, a vat ruptured in London, causing a localized tsunami of what liquid that killed 8 people?", a: "Beer" },
        { q: "What did eccentric astronomer Tycho Brahe's pet moose die from?", a: "Drinking too much beer and falling downstairs" },
        { q: "What bizarre weapon did the British spy agency MI5 design to assassinate German officers during WWII?", a: "Exploding Rats" },
        { q: "In the 1830s, what popular condiment was sold in the US as a medicine to cure diarrhea and indigestion?", a: "Ketchup" },
        { q: "What everyday piece of exercise equipment was originally invented in 1818 as a torture device for prisoners?", a: "The Treadmill" },
        { q: "In 1923, jockey Frank Hayes won a horse race at Belmont Park despite what unusual circumstance?", a: "He was dead (Heart attack mid-race)" },
        { q: "What did ancient Egyptians use as a form of natural birth control, forming it into a block?", a: "Crocodile Dung" },
        { q: "In 1518, a plague struck Strasbourg, France, causing hundreds of people to uncontrollably do what for over a month?", a: "Dance" },
        { q: "What did astronaut John Young successfully smuggle onto the Gemini 3 spacecraft in 1965?", a: "A Corned Beef Sandwich" },
        { q: "The CIA spent $20 million on 'Project Acoustic Kitty' in the 1960s to turn a cat into a spy. What happened on its first mission?", a: "It got hit by a taxi" },
        { q: "President Andrew Jackson had to have his pet removed from his funeral because it wouldn't stop doing what?", a: "Swearing / Cursing" },
        { q: "In 1999, what popular children's toy was banned from the NSA headquarters due to fears it could record classified audio?", a: "Furby" },
        { q: "What unusual psychological condition causes people to believe they have shrunk and are living in a world of giants (or vice versa)?", a: "Alice in Wonderland Syndrome" },
        { q: "During the Cold War, the US government seriously considered dropping enormous versions of what item over the USSR to demoralize them?", a: "Condoms (Labeled 'Medium')" },
        { q: "In 1386, a pig in France was arrested, dressed in human clothes, and formally executed for what crime?", a: "Murdering a child" },
        { q: "What was famously stolen from Thomas Edison’s laboratory, resulting in a ransom note demanding $1 million?", a: "His Brain (Wait, no, that was Einstein. Edison's LAST BREATH is kept in a vial!) *Correct Answer: Einstein's Brain was stolen by his pathologist*" },
        { q: "What is the official state sport of Maryland?", a: "Jousting" },
        { q: "The shortest commercial flight in the world takes place in Scotland. How long does it last?", a: "Under 2 Minutes (Westray to Papa Westray)" },
        { q: "What highly radioactive element was used in early 20th-century health drinks, toothpaste, and face creams?", a: "Radium" },
        { q: "In 1976, the town of Châteauneuf-du-Pape in France passed a law officially banning what from flying over or landing in the town?", a: "UFOs / Flying Saucers" },
        { q: "What did a French man named Michel Lotito spend two years eating, piece by piece?", a: "A Cessna 150 Airplane" },
        { q: "What popular brand of mouthwash was originally marketed in the 19th century as a floor cleaner and a cure for gonorrhea?", a: "Listerine" },
        { q: "What odd item does the government of Canada keep a strategic, highly guarded reserve of, worth millions of dollars?", a: "Maple Syrup" },
        { q: "In 1904, the Olympic Marathon in St. Louis was won by an athlete who traveled 11 miles of the race in what?", a: "A Car" },
        { q: "What animal's mating call is so loud that if it swims past a submarine, it can interfere with the sonar?", a: "Pistol Shrimp (or Snapping Shrimp)" },
        { q: "What did Victorians commonly use to take 'headless' portraits as a parlor trick?", a: "Double Exposure Photography" },
        { q: "What famous historic figure survived an assassination attempt because the bullet was stopped by his 50-page speech folded in his pocket?", a: "Theodore Roosevelt" },
        { q: "In 2008, a Norwegian penguin was officially knighted and promoted to what military rank?", a: "Brigadier Sir Nils Olav" },
        { q: "What did the US government deliberately poison during Prohibition, resulting in over 10,000 deaths?", a: "Industrial Alcohol" },
        { q: "What strange object did a South African railway company officially employ as a signalman in the late 1800s?", a: "A Baboon (Named Jack)" },
        { q: "In 1898, a novelist wrote a book about a massive 'unsinkable' ocean liner that hits an iceberg in the North Atlantic. What was the fictional ship named?", a: "The Titan (14 years before the Titanic)" },
        { q: "What unusual physical feature did the famously wealthy eccentric Hetty Green use to avoid paying for medical care?", a: "She dressed in rags (Despite being the richest woman in America)" },
        { q: "In the 16th century, what body part of a dead king was supposedly eaten by an eccentric geologist at a dinner party?", a: "King Louis XIV's Heart" },
        { q: "During WWII, what soft drink was created in Nazi Germany because the syrup for Coca-Cola couldn't be imported?", a: "Fanta" },
        { q: "What did ancient Romans commonly use to bleach their teeth and wash their clothes?", a: "Urine (Ammonia)" },
        { q: "In 1952, Albert Einstein was officially offered the presidency of which country?", a: "Israel" },
        { q: "What bizarre weapon did the ancient Greeks occasionally catapult over city walls during sieges?", a: "Beehives" },
        { q: "What animal holds the record for the longest recorded flight of a chicken?", a: "13 Seconds" },
        { q: "In 2012, a man in Florida was arrested for repeatedly trying to trade what live animal for a case of beer?", a: "An Alligator" },
        { q: "What did the British military build out of wood and canvas in North Africa during WWII to trick the Germans?", a: "A Fake City / Fake Tanks" },
        { q: "In the 1980s, Pablo Escobar built a private zoo. Which of his imported animals became an invasive species in Colombia?", a: "Hippos" },
        { q: "What is the only US state to have a flag with different designs on the front and the back?", a: "Oregon" },
        { q: "What widely used medical device was invented by a doctor who was too embarrassed to put his ear to women's chests?", a: "The Stethoscope" },
        { q: "In 1971, DB Cooper hijacked a plane, extorted $200,000, and escaped by doing what?", a: "Parachuting out mid-flight" },
        { q: "What unusual phobia is defined as the fear of being watched by a duck?", a: "Anatidaephobia" },
        { q: "What famous inventor aggressively campaigned to execute an elephant named Topsy using electricity to prove alternating current was dangerous?", a: "Thomas Edison" },
        { q: "In 1932, a group of pregnant women in Australia successfully sued a hospital after being accidentally given what instead of a sedative?", a: "Battery Acid (Actually, they were given Strychnine by mistake)" },
        { q: "What type of bomb was proposed by the US military in 1994, designed to make enemy troops fall in love with each other?", a: "The 'Gay Bomb' (A pheromone weapon)" },
        { q: "In 1672, an angry mob in the Netherlands didn't just assassinate their Prime Minister (Johan de Witt), they also did what to him?", a: "Ate Him" },
        { q: "What is the name of the town in Norway where it is technically illegal to die, because bodies won't decompose in the permafrost?", a: "Longyearbyen" },
        { q: "In 2007, the country of Iran arrested 14 what, accusing them of espionage?", a: "Squirrels" },
        { q: "What object was originally designed by a 1920s physical education teacher to catch medicine balls, not people?", a: "The Trampoline" },
        { q: "During the Cold War, the CIA used a magic trick manual written by whom to teach agents how to slip drugs into drinks?", a: "John Mulholland (A professional illusionist)" },
        { q: "In the 1700s, an English woman named Mary Toft convinced prominent doctors she was giving birth to what?", a: "Rabbits" },
        { q: "What did Russian mystic Rasputin allegedly survive on the night of his murder before finally drowning in an icy river?", a: "Poison, being shot three times, and beaten" },
        { q: "What did a man named Tsutomu Yamaguchi remarkably survive twice in 1945?", a: "Both Atomic Bombs (Hiroshima and Nagasaki)" },
        { q: "In 1961, a US B-52 bomber broke apart over North Carolina, dropping two nuclear bombs. What stopped one from detonating?", a: "A single, low-voltage switch" },
        { q: "What did a Swedish king try to ban in 1746 by forcing a convicted murderer to drink it every day until he died to prove it was poison?", a: "Coffee" },
        { q: "In 1876, the town of Olympia Springs, Kentucky experienced a mysterious shower of what falling from the sky?", a: "Raw Meat" },
        { q: "What animal's defense mechanism involves deliberately breaking its own bones and pushing them through its skin to use as claws?", a: "The Hairy Frog (Wolverine Frog)" },
        { q: "In the 1890s, what highly addictive drug was marketed over-the-counter by Bayer as a cough suppressant for children?", a: "Heroin" },
        { q: "What historical figure had a pet parrot that had to be removed from his funeral because it kept shouting profanities?", a: "Andrew Jackson" },
        { q: "In 1956, a man named Thomas Fitzpatrick stole a small airplane and landed it where in New York City for a bet?", a: "In front of a bar on a narrow street" },
        { q: "What unusual liquid did doctors successfully use as an IV substitute for blood plasma during WWII and the Vietnam War?", a: "Coconut Water" },
        { q: "In 1927, what animal did the mayor of Chicago formally put on trial for 'ruining the morals of the city's youth'?", a: "A Pig (Actually, it was a cow in a publicity stunt)" },
        { q: "What was the bizarre profession of 'Groom of the Stool' in the Tudor royal court?", a: "Wiping the King's bottom" },
        { q: "What modern convenience was invented by a woman named Mary Anderson in 1903 after she saw a driver sticking his head out a window in a storm?", a: "Windshield Wipers" },
        { q: "In 1474, a chicken in Basel, Switzerland, was put on trial and burned at the stake for committing what 'unnatural' crime?", a: "Laying an egg without a yolk (Accused of being a cockatrice)" },
        { q: "What incredibly durable micro-animal can survive the vacuum of space, radiation, and temperatures near absolute zero?", a: "Tardigrade (Water Bear)" },
        { q: "In 1962, an epidemic in Tanganyika (now Tanzania) caused over 1,000 people to uncontrollably do what for months?", a: "Laugh (The Tanganyika Laughter Epidemic)" },
        { q: "What incredibly popular video game franchise was originally created as a Japanese playing card company in 1889?", a: "Nintendo" },
        { q: "What famous Hollywood monster's iconic roar was actually created by dragging a resin-coated leather glove along a double bass string?", a: "Godzilla" },
        { q: "In the Victorian era, books bound in 'anthropodermic bibliopegy' were books bound in what material?", a: "Human Skin" },
        { q: "What country is home to the 'Door to Hell,' a massive crater that has been burning continuously with natural gas since 1971?", a: "Turkmenistan" },
        { q: "In 2004, a man driving a modified bulldozer armored with concrete destroyed parts of a Colorado town. What is his vehicle known as?", a: "The Killdozer" },
        { q: "What did astronauts on the Apollo 12 mission secretly leave on the moon containing drawings by Andy Warhol?", a: "A tiny ceramic tile (The Moon Museum)" },
        { q: "In 1992, a shipping crate washed overboard, releasing 28,000 of what item into the ocean, which scientists used to track currents?", a: "Rubber Ducks (Friendly Floatees)" },
        { q: "What did the US Postal Service legally allow you to send through the mail between 1913 and 1915?", a: "Children (Mailing babies)" },
        { q: "What animal has a bifurcated (two-headed) penis and a female counterpart with two vaginas?", a: "Marsupials (Koalas/Kangaroos)" },
        { q: "In 1930, the BBC broadcasted a unique news report declaring what?", a: "'There is no news' (and played piano music instead)" },
        { q: "What odd feature does the male platypus possess to defend itself against rivals?", a: "Venomous ankle spurs" },
        { q: "What famous 20th-century artist completely financed an expedition to map the ocean floor to find a sea monster?", a: "Salvador Dali (Actually, no, that's a myth. *Real answer: He designed a surrealist pavilion for the World's Fair featuring a liquid sky*)" },
        { q: "What is the term for the bizarre phenomenon where it rains frogs or fish from the sky?", a: "Animal Rain (or Lluvia de Peces)" },
        { q: "In 1862, Congress passed a law authorizing the US Treasury to print currency featuring the portrait of what living person?", a: "Spencer Clark (A treasury clerk who put his own face on the 5-cent bill)" },
        { q: "What animal's scientific name, 'Gorilla gorilla gorilla', is entirely composed of the word gorilla?", a: "The Western Lowland Gorilla" },
        { q: "In 1986, a catastrophic release of carbon dioxide from Lake Nyos suffocated 1,700 people. In what country did this happen?", a: "Cameroon" },
        { q: "What did a French postman named Ferdinand Cheval spend 33 years building entirely out of stones he picked up on his mail route?", a: "The Ideal Palace (Le Palais Idéal)" }
    ],
    facts_th: [
        { q: "ในปี 1989 สหภาพโซเวียตนำกองเรือดำน้ำและเรือรบ 17 ลำไปแลกกับสินค้าบริโภคยี่ห้อใด?", a: "เป๊ปซี่ (Pepsi)" },
        { q: "ในช่วงสงครามโลกครั้งที่ 2 กองทัพโปแลนด์ได้รับสัตว์ชนิดใดเข้าประจำการเป็นทหารชั้นพลทหาร ซึ่งมันช่วยแบกกระสุนปืนใหญ่จริงในสมรภูมิ?", a: "หมีสีน้ำตาล (ชื่อ Wojtek)" },
        { q: "ในปี 1859 สหรัฐฯ และอังกฤษเกือบเปิดฉากทำสงครามเต็มรูปแบบกันเพียงเพราะการยิงสัตว์ชนิดใดตาย?", a: "หมู (สงครามหมู - The Pig War)" },
        { q: "ในปี 1932 กองทัพออสเตรเลียประกาศสงครามอย่างเป็นทางการกับสัตว์ปีกชนิดใด (และเป็นฝ่ายแพ้)?", a: "นกอีมู (Emu)" },
        { q: "ในช่วงสงครามโลกครั้งที่ 2 กองทัพสหรัฐฯ พยายามติดระเบิดเพลิงขนาดจิ๋วไว้กับสัตว์บินได้ชนิดใดเพื่อส่งไปเผาเมืองคู่ต่อสู้?", a: "ค้างคาว" },
        { q: "ในปี 1866 กองทัพลิกเตนสไตน์ส่งทหาร 80 นายไปทำสงคราม แต่เมื่อขากลับพวกเขากลับมารวมทั้งหมดกี่คน?", a: "81 คน (ไม่ได้สูญเสียใครเลย แถมได้เพื่อนชาวอิตาลีกลับมาเพิ่ม)" },
        { q: "จักรพรรดิคาลิกูลาแห่งโรมันเคยประกาศสงครามกับสิ่งใด และสั่งให้ทหารใช้ดาบแทงสิ่งนั้นซ้ำๆ?", a: "ทะเล (หรือเทพเจ้าแห่งมหาสมุทร)" },
        { q: "ในปี 1998 กลุ่มคนในประเทศเยเมนได้ยื่นฟ้อง NASA โดยอ้างว่าพวกเขามีสิทธิ์ธรรมชอบตามกฎหมายเหนือดาวเคราะห์ดวงใดเนื่องจากเป็นมรดกตกทอดจากบรรพบุรุษ?", a: "ดาวอังคาร (Mars)" },
        { q: "ในยุคอดีต พระสันตะปาปาเกรกอรี่ที่ 9 เคยประกาศว่าสัตว์เลี้ยงยอดนิยมชนิดใดคือเครื่องมือของซาตาน จนนำไปสู่การสังหารหมู่พวกมันทั่วทวีปยุโรป?", a: "แมว" },
        { q: "ลอร์ด ไบรอน (กวีชื่อดัง) จงใจประชดมหาวิทยาลัยเคมบริดจ์ที่สั่งห้ามเลี้ยงสุนัข โดยการนำสัตว์ดุร้ายชนิดใดมาเลี้ยงในหอพักแทน?", a: "หมี" },
        { q: "ในช่วงศตวรรษที่ 18 เจ้าของที่ดินผู้ร่ำรวยในอังกฤษนิยมจ้างคนแปลกหน้ามาอาศัยอยู่ในถ้ำจำลองกลางสวนเพื่อทำหน้าที่เป็นอะไร?", a: "ฤๅษีประดับสวน (Ornamental Hermits)" },
        { q: "ในปี 1919 เกิดภัยพิบัติแปลกประหลาดที่เมืองบอสตัน เมื่อถังเก็บขนาดใหญ่ระเบิดทำให้น้ำปริมาณ 2.3 ล้านแกลลอนหลากท่วมเมือง ของเหลวเหนียวข้นนั้นคืออะไร?", a: "กากน้ำตาล (Molasses)" },
        { q: "เลื่อยยนต์ (Chainsaw) ที่ใช้ตัดไม้ในปัจจุบัน ถูกคิดค้นขึ้นครั้งแรกในช่วงปลายศตวรรษที่ 18 เพื่อใช้ประโยชน์ทางการแพทย์ในเรื่องใด?", a: "ช่วยในการคลอดบุตร (การเลื่อยตัดกระดูกเชิงกราน)" },
        { q: "ในปี 1814 ถังหมักขนาดใหญ่แตกในลอนดอน ส่งผลให้เกิดอุทกภัยสึนามิของเหลวไหลทะลักคร่าชีวิตผู้คนไป 8 คน ของเหลวนั้นคืออะไร?", a: "เบียร์" },
        { q: "กวางมูสซึ่งเป็นสัตว์เลี้ยงแสนรักของ ไทโค บราเฮ นักดาราศาสตร์ชื่อดัง เสียชีวิตจากสาเหตุสุดพิลึกใด?", a: "แอบดื่มเบียร์ในงานเลี้ยงจนเมาแล้วพลัดตกบันได" },
        { q: "หน่วยข่าวกรองอังกฤษ MI5 เคยออกแบบอาวุธลอบสังหารนายทหารนาซีเยอรมันในช่วงสงครามโลกครั้งที่ 2 โดยใช้ซากของสัตว์ชนิดใดมายัดวัตถุระเบิด?", a: "หนู (หนูระเบิด - Exploding Rats)" },
        { q: "ในช่วงทศวรรษ 1830 เครื่องปรุงรสยอดนิยมชนิดใดถูกวางจำหน่ายตามร้านขายยาในสหรัฐฯ ในฐานะยารักษาอาการท้องร่วงและอาหารไม่ย่อย?", a: "ซอสมะเขือเทศ (Ketchup)" },
        { q: "อุปกรณ์ออกกำลังกายในฟิตเนสชนิดใดที่ถูกคิดค้นขึ้นครั้งแรกในปี 1818 โดยวิศวกรชาวอังกฤษเพื่อใช้เป็นเครื่องมือลงทัณฑ์ทรมานนักโทษ?", a: "ลู่วิ่ง (The Treadmill)" },
        { q: "ในปี 1923 จ๊อกกี้ชื่อ แฟรงก์ เฮย์ส ชนะการแข่งขันขี่ม้าทางเรียบ ทั้งที่มีสถานการณ์ผิดปกติร้ายแรงใดเกิดขึ้นกับร่างกายของเขาในระว่างการแข่งขัน?", a: "เขาเสียชีวิตแล้ว (หัวใจวายเฉียบพลันกลางทางแต่ร่างยังค้างอยู่บนอาน)" },
        { q: "ชาวอียิปต์โบราณใช้สิ่งปฏิกูลจากสัตว์ชนิดใดมาปั้นเป็นก้อนสอดเพื่อใช้เป็นยาคุมกำเนิดตามธรรมชาติ?", a: "มูลจระเข้" },
        { q: "ในปี 1518 เกิดโรคระบาดประหลาดในฝรั่งเศส ทำให้ผู้คนหลายร้อยคนไม่สามารถควบคุมตัวเองได้และพากันทำสิ่งใดกลางถนนจนเหนื่อยล้าเสียชีวิต?", a: "เต้นรำ (Plague Dance)" },
        { q: "นักบินอวกาศ จอห์น ยัง แอบลักลอบนำอาหารต้องห้ามชนิดใดขึ้นไปบนยานอวกาศ Gemini 3 ในปี 1965 จนกลายเป็นเรื่องตักเตือนระดับประเทศ?", a: "แซนด์วิช (แซนด์วิชเนื้อเค็ม)" },
        { q: "ในยุคสงครามเย็น รัฐบาลสหรัฐฯ ทุ่มเงิน 20 ล้านดอลลาร์ในโครงการ 'Acoustic Kitty' เพื่อดักฟังโซเวียต โดยการผ่าตัดฝังไมโครโฟนไว้ในตัวสัตว์ชนิดใด?", a: "แมว" },
        { q: "สัตว์เลี้ยงของอดีตประธานาธิบดี แอนดรูว์ แจ็กสัน ต้องถูกไล่ออกจากงานศพของเจ้าของเนื่องจากมันไม่ยอมหยุดทำพฤติกรรมใด?", a: "ตะโกนสบถคำหยาบคาย (เนื่องจากมันจำมาจากเจ้าของ)" },
        { q: "ในปี 1999 ของเล่นเด็กยอดฮิตชนิดใดถูกสั่งแบนห้ามเข้าสำนักงานใหญ่ของ NSA เด็ดขาดเนื่องจากความกังวลว่ามันอาจบันทึกเสียงความลับได้?", a: "เฟอร์บี้ (Furby)" },
        { q: "อาการทางจิตวิทยาที่แปลกประหลาดชนิดใดที่ทำให้ผู้ป่วยมองเห็นสิ่งแวดล้อมหรืออวัยวะตนเองหดเล็กลงหรือขยายใหญ่เกินจริง ตั้งชื่อตามวรรณกรรมชื่อดัง?", a: "กลุ่มอาการอลิซในดินแดนมหัศจรรย์ (Alice in Wonderland Syndrome)" },
        { q: "ในช่วงสงครามเย็น สหรัฐฯ เคยคิดแผนปล่อยถุงยางอนามัยขนาดใหญ่ยักษ์ลงในโซเวียต โดยจงใจพิมพ์ป้ายกำกับขนาดที่กล่องว่าอย่างไรเพื่อทำลายขวัญทหารโซเวียต?", a: "ไซส์เล็ก หรือ ขนาดกลาง (Medium)" },
        { q: "ในปี 1386 เกิดเหตุการณ์ประหลาดในฝรั่งเศสเมื่อสัตว์ชนิดใดถูกจับกุม แต่งกายด้วยเสื้อผ้ามนุษย์ และถูกประหารชีวิตในข้อหาฆาตกรรมเด็ก?", a: "หมู" },
        { q: "แพทย์ชันสูตรศพได้ลักลอบขโมยอวัยวะส่วนใดของอัจฉริยะ อัลเบิร์ต ไอน์สไตน์ ไปหลังจากเขาเสียชีวิตเพื่อเก็บไว้ศึกษาเอง?", a: "สมอง (Brain)" },
        { q: "สิ่งมีชีวิตชนิดใดที่เป็นสัตว์ชนิดเดียวในโลกที่ไม่มีวันแก่ตายตามธรรมชาติ โดยสามารถย้อนวัยตัวเองกลับไปเป็นตัวอ่อนเพื่อเติบโตใหม่ได้เรื่อยๆ?", a: "แมงกะพรุน (แมงกะพรุนอมตะ)" },
        { q: "ธาตุที่มีกัมมันตภาพรังสีอันตรายสูงชนิดใดเคยถูกนำมาผสมในเครื่องดื่ม ยาสีฟัน และครีมทาหน้าอย่างแพร่หลายในช่วงต้นศตวรรษที่ 20?", a: "เรเดียม (Radium)" },
        { q: "เมืองหนึ่งในฝรั่งเศสมีกฎหมายแปลกประหลาดตั้งแต่ปี 1976 โดยสั่งแบนห้ามไม่ให้ยานพาหนะลึกลับชนิดใดบินผ่านหรือร่อนลงจอดในเขตเมืองเด็ดขาด?", a: "จานบิน / UFO" },
        { q: "ชายชาวฝรั่งเศสนามว่า มิเชล โลติโต มีความสามารถพิเศษสุดพิลึก โดยเขาใช้เวลา 2 ปีในการทยอยเคี้ยวกินสิ่งใดจนหมดลำ?", a: "เครื่องบิน (เครื่องบิน Cessna 150)" },
        { q: "น้ำยาบ้วนปากยี่ห้อดังอย่าง ลิสเตอรีน (Listerine) เดิมทีถูกคิดค้นและทำการตลาดในศตวรรษที่ 19 ในฐานะน้ำยาประเภทใด?", a: "น้ำยาถูพื้น (หรือยารักษาโรคหนองใน)" },
        { q: "รัฐบาลประเทศแคนาดามีการจัดตั้งคลังสำรองเชิงยุทธศาสตร์ที่มีเวรยามคุ้มกันหนาแน่นเพื่อเก็บรักษาของเหลวชนิดใดที่มีมูลค่าหลายล้านดอลลาร์?", a: "น้ำเชื่อมเมเปิ้ล (Maple Syrup)" },
        { q: "ในการแข่งขันวิ่งมาราธอนโอลิมปิกปี 1904 ผู้ชนะเหรียญทองแอบโกงการแข่งขันในระยะทาง 11 ไมล์ด้วยการใช้วิธีใด?", a: "นั่งรถยนต์" },
        { q: "สัตว์น้ำขนาดเล็กชนิดใดที่มีเสียงล่าเหยื่อและหนีศัตรูดังมากจนหากมันอยู่รวมกันจำนวนมากจะสามารถกวนระบบโซนาร์ของเรือดำน้ำได้?", a: "กุ้งดีดขัน (Pistol Shrimp)" },
        { q: "ในยุควิคตอเรียน ผู้คนนิยมชวนกันไปสตูดิโอถ่ายภาพเพื่อทำเทคนิค parlor trick ถ่ายภาพพอร์เทรตในลักษณะชวนสยองแบบใด?", a: "ภาพถ่ายคนหัวขาด" },
        { q: "อดีตประธานาธิบดี ธีโอดอร์ รูสเวลต์ รอดชีวิตจากการถูกยิงเข้าที่หน้าอกได้อย่างปาฏิหาริย์เนื่องจากกระสุนไปปะทะกับสิ่งใดในกระเป๋าเสื้อ?", a: "กระดาษบทสุนทรพจน์หนา 50 หน้า (ที่พับไว้)" },
        { q: "ในปี 2008 นกเพนกวินตัวหนึ่งในสวนสัตว์นอร์เวย์ได้รับการแต่งตั้งและเลื่อนยศทางทหารขึ้นเป็นยศระดับใดอย่างเป็นทางการ?", a: "พลจัตวา (Brigadier Sir Nils Olav)" },
        { q: "ในช่วงยุคห้ามจำหน่ายสุรา (Prohibition) รัฐบาลสหรัฐฯ ได้แอบสั่งให้ใส่สิ่งใดลงในแอลกอฮอล์อุตสาหกรรมจนเป็นเหตุให้มีผู้ฝ่าฝืนเสียชีวิตกว่าหมื่นคน?", a: "ยาพิษ" },
        { q: "บริษัททางรถไฟในแอฟริกาใต้ช่วงปลายศตวรรษที่ 1800 เคยจ้างสิ่งมีชีวิตชนิดใดมาทำหน้าที่เป็นพนักงานสับรางรถไฟอย่างเป็นทางการและได้ค่าจ้างเป็นเบียร์?", a: "ลิงบาบูน (ชื่อ Jack)" },
        { q: "ในปี 1898 มีนักเขียนนิยายเขียนเรื่องราวเกี่ยวกับเรือสำราญขนาดยักษ์ที่ไม่มีวันจมแต่ชนภูเขาน้ำแข็งจมลงในมหาสมุทร นิยายเรื่องนั้นตั้งชื่อเรือลำนั้นว่าอะไร (ก่อนเกิดเหตุการณ์จริง 14 ปี)?", a: "เรือไททัน (The Titan)" },
        { q: "มหาเศรษฐีหญิงที่รวยที่สุดในอเมริกาในอดีตอย่าง เฮตตี้ กรีน มีพฤติกรรมตระหนี่สุดโต่งแบบใดเพื่อหลีกเลี่ยงการจ่ายค่ารักษาพยาบาลที่โรงพยาบาล?", a: "ปลอมตัวแต่งกายด้วยเสื้อผ้าขาดๆ เหมือนขอทาน" },
        { q: "ในศตวรรษที่ 16 อวัยวะส่วนใดของพระเจ้าหลุยส์ที่ 14 กษัตริย์ฝรั่งเศสที่ล่วงลับ ถูกนักธรณีวิทยาผู้พิสดารแอบหยิบมากินในงานเลี้ยงอาหารค่ำ?", a: "หัวใจ (Heart)" },
        { q: "ในช่วงสงครามโลกครั้งที่ 2 น้ำอัดลมยี่ห้อ แฟนต้า (Fanta) ถูกคิดค้นขึ้นในประเทศใดเนื่องจากขาดแคลนวัตถุดิบในการผลิตโค้ก?", a: "นาซีเยอรมนี" },
        { q: "ชาวโรมันโบราณนิยมนำของเหลวขับถ่ายชนิดใดมาใช้ฟอกฟันให้ขาวสะอาดและใช้เป็นน้ำยาซักผ้า?", a: "ปัสสาวะ (ฉี่)" },
        { q: "ในปี 1952 อัจฉริยะ อัลเบิร์ต ไอน์สไตน์ เคยได้รับการเสนอตำแหน่งทางการเมืองระดับสูงเป็นประธานาธิบดีของประเทศใด?", a: "ประเทศอิสราเอล" },
        { q: "ชาวกรีกโบราณเคยคิดค้นอาวุธสงครามชีวภาพสุดป่วนโดยการนำสิ่งใดใส่เครื่องยิงขว้างข้ามกำแพงเข้าไปในเมืองคู่ต่อสู้ระหว่างปิดล้อม?", a: "รังผึ้ง" },
        { q: "จากสถิติโลกที่มีการบันทึกไว้ ระยะเวลาที่ยาวนานที่สุดในการบินเหนือน้ำแข็งหรือพื้นหญ้าของ 'ตัวไก่' อยู่ที่ประมาณกี่วินาที?", a: "13 วินาที" },
        { q: "ในปี 2012 ชายคนหนึ่งในรัฐฟลอริดาถูกเจ้าหน้าที่ตำรวจจับกุมหลังจากพยายามนำสัตว์ป่ามีชีวิตชนิดใดไปขอแลกกับเบียร์หนึ่งลังที่ร้านค้า?", a: "จระเข้อัลลิเกเตอร์ (Alligator)" },
        { q: "กองทัพอังกฤษสร้างสิ่งปลูกสร้างและพาณิชย์จำลองจากไม้และผ้าใบจำนวนมากในแอฟริกาเหนือช่วงสงครามโลกเพื่อหลอกตานักบินเยอรมัน สิ่งนั้นคืออะไร?", a: "เมืองปลอม และรถถังปลอม" },
        { q: "ฮิปโปโปเตมัสจำนวนมากที่กลายเป็นภัยคุกคามและเป็นเอเลี่ยนสปีชีส์ในประเทศโคลอมเบียปัจจุบัน เดิมทีถูกนำเข้ามาโดยเจ้าพ่อค้ายาเสพติดคนใด?", a: "ปาโบล เอสโกบาร์ (Pablo Escobar)" },
        { q: "ธงประจำรัฐออริกอน (Oregon) ในสหรัฐฯ มีความแปลกประหลาดทางดีไซน์กว่าธงประจำรัฐหรือธงชาติอื่นในโลกอย่างไร?", a: "ลวดลายด้านหน้าและด้านหลังไม่เหมือนกัน" },
        { q: "อุปกรณ์ทางการแพทย์อย่าง หูฟังแพทย์ (Stethoscope) ถูกคิดค้นขึ้นโดยคุณหมอชาวฝรั่งเศสเนื่องจากเขารู้สึกอย่างไรในการตรวจคนไข้สตรี?", a: "เขินอาย/ไม่กล้าเอาหูไปแนบหน้าอกผู้หญิงตรงๆ" },
        { q: "ในปี 1971 อาชญากรปริศนานาม ดีบี คูเปอร์ (DB Cooper) จารกรรมเงิน 2 แสนดอลลาร์บนเครื่องบินและหลบหนีหายสาบสูญไปด้วยวิธีใด?", a: "กระโดดร่มลงมาจากเครื่องบินกลางเวหา" },
        { q: "โรคกลัวสุดแปลกที่เรียกว่า Anatidaephobia คือความหวาดระแวงหรือกลัวว่าตัวเองกำลังถูกสัตว์ชนิดใดจ้องมองอยู่ตลอดเวลา?", a: "เป็ด" },
        { q: "โทมัส เอดิสัน เคยจัดกิจกรรมชวนเชื่อสุดสยองโดยการใช้ไฟฟ้าแรงสูงช็อตสัตว์ขนาดยักษ์ชนิดใดจนเสียชีวิตเพื่อบลัฟว่าระบบไฟสลับอันตราย?", a: "ช้าง" },
        { q: "กองทัพสหรัฐฯ เคยเสนอโครงการสร้างระเบิดเคมีสุดพิลึกในปี 1994 ชื่อ 'Gay Bomb' ออกแบบมาเพื่อส่งฟีโรโมนไปทำให้ทหารข้าศึกเกิดอาการใด?", a: "ตกหลุมรักกันเอง / สนใจกันเองจนเสียกระบวนรบ" },
        { q: "ในปี 1672 ฝูงชนที่โกรธแค้นในเนเธอร์แลนด์ได้รุมสังหารนายกรัฐมนตรี โยฮัน เดอ วิตต์ และทำสิ่งใดกับศพของเขาด้วยความคลั่ง?", a: "รุมฉีกเนื้อกินศพ" },
        { q: "เมืองลองเยียร์เบียน (Longyearbyen) ในนอร์เวย์ มีกฎหมายห้ามไม่ให้ผู้ใดทำสิ่งใดในเขตเมืองเนื่องจากชั้นดินเยือกแข็งจะทำให้ศพไม่เน่าเปื่อย?", a: "ห้ามเสียชีวิต (หรือห้ามฝังศพ)" },
        { q: "ในปี 2007 ทางการประเทศอิหร่านได้บุกจับกุมสัตว์ขนาดเล็กชนิดใดจำนวน 14 ตัวบริเวณชายแดนในข้อหาทำการจารกรรมเป็นสายลับข้ามชาติ?", a: "กระรอก" },
        { q: "แทรมโพลีน (Trampoline) อุปกรณ์กระโดดเด้งดึ๋งในปัจจุบัน เดิมทีในยุค 1920 ถูกสร้างขึ้นเพื่อจุดประสงค์ใดในโรงเรียน?", a: "ใช้เป็นตาข่ายรับลูกน้ำหนัก (ลูกเมดิซินบอล)" },
        { q: "คนในอาชีพใดช่วยเขียนคู่มือลับสอนวิธีแอบหย่อนยาพิษหรือยาสลบลงแก้วเครื่องดื่มของเป้าหมาย ให้แก่ CIA ในช่วงสงครามเย็น?", a: "นักมายากล" },
        { q: "ในศตวรรษที่ 17 หญิงชาวอังกฤษนามว่า แมรี่ ทอฟต์ ตบตาแพทย์หลวงจนเชื่อสนิทใจว่าเธอมีความสามารถเหนือธรรมชาติในการคลอดสิ่งใด?", a: "ลูกกระต่าย" },
        { q: "รัสปูติน นักบวชผู้ทรงอิทธิพลแห่งรัสเซีย รอดชีวิตจากการถูกลอบสังหารด้วยวิธีใดบ้างในคืนเดียว ก่อนจะจมน้ำเสียชีวิตในแม่น้ำที่เป็นน้ำแข็ง?", a: "โดนยาพิษ, โดนยิง 3 นัด และโดนทุบตี" },
        { q: "ชายชาวญี่ปุ่นชื่อ สึโตมุ ยามากูจิ ได้รับการบันทึกว่าเป็นผู้รอดชีวิตจากเหตุการณ์วิบัติครั้งใหญ่อะไรชนิดใดถึง 2 ครั้ง?", a: "ระเบิดปรมาณู (ที่ฮิโรชิมาและนางาซากิ)" },
        { q: "ในปี 1961 เกิดอุบัติเหตุเครื่องบินทิ้งระเบิดสหรัฐฯ ตกทำให้นิวเคลียร์หลุดร่วงลงมา สิ่งใดที่ช่วยยับยั้งไม่ให้เกิดการระเบิดล้างบาง?", a: "สวิตช์นิรภัยแรงดันต่ำเพียงตัวเดียว" },
        { q: "กษัตริย์สวีเดนในอดีตเคยพยายามสั่งแบนเครื่องดื่มชนิดใด โดยทดลองให้นักโทษประหารดื่มทุกวันเพื่อพิสูจน์ว่าเป็นยาพิษแต่กลับอายุยืนกว่าหมอ?", a: "กาแฟ" },
        { q: "ในปี 1876 เกิดปรากฏการณ์ลึกลับที่รัฐเคนทักกี เมื่อมีสิ่งใดซึ่งเป็นของสดตกลงมาจากท้องฟ้าใสสะอาดยาวนานหลายนาที?", a: "เนื้อสด / เศษเนื้อสัตว์" },
        { q: "กบขน (Hairy Frog) มีกลไกการป้องกันตัวสุดสยองคล้ายตัวละครวูล์ฟเวอรีน โดยมันจะจงใจทำสิ่งใดกับร่างกายตัวเองเพื่อใช้เป็นอาวุธ?", a: "หักกระดูกนิ้วตัวเองแทงทะลุผิวหนังออกมาเป็นกรงเล็บ" },
        { q: "บริษัทเวชภัณฑ์ชื่อดังอย่าง Bayer เคยทำการตลาดวางจำหน่ายยาเสพติดให้โทษประเภทใดในฐานะยาแก้ไอสำหรับเด็กในอดีต?", a: "เฮโรอีน (Heroin)" },
        { q: "บริษัทของเล่นยักษ์ใหญ่ระดับโลกอย่าง LEGO จากประเทศเดนมาร์ก ในช่วงยุคแรกเริ่มผลิตของเล่นทั้งหมดขึ้นจากวัสดุชนิดใด?", a: "ไม้ (Wooden toys)" },
        { q: "ในปี 1956 ชายชื่อ โทมัส ฟิตซ์แพทริก ชนะการพนันในบาร์โดยการลักลอบขโมยเครื่องบินขนาดเล็กมาลงจอดที่ใดกลางกรุงนิวยอร์กตอนตีฟ้ารุ่ง?", a: "บนถนนสายแคบหน้าบาร์เหล้าที่เขานั่ง" },
        { q: "เนื่องจากภาวะขาดแคลนในสงครามโลกและสงครามเวียดนาม แพทย์เคยนำของเหลวตามธรรมชาติจากผลไม้ชนิดใดมาใช้ฉีดเข้าเส้นเลือดแทนพลาสม่าในเลือด?", a: "น้ำมะมะพร้าว" },
        { q: "ในปี 1927 นายกเทศมนตรีเมืองชิคาโกเคยจัดฉากสร้างความฮือฮาโดยการนำสัตว์ชนิดใดขึ้นศาลพิจารณาคดีในข้อหา 'ทำลายศีลธรรมเยาวชน'?", a: "วัว" },
        { q: "ตำแหน่งข้าราชบริพาร 'Groom of the Stool' ในพระราชวังอังกฤษยุคโบราณ มีหน้าที่ส่วนพระองค์สุดพิลึกเรื่องใดให้กษัตริย์?", a: "เช็ดก้น / ทำความสะอาดหลังขับถ่ายให้กษัตริย์" },
        { q: "ที่ปัดน้ำฝนรถยนต์ (Windshield Wipers) ถูกคิดค้นขึ้นโดยผู้หญิงชื่อ แมรี่ แอนเดอร์สัน หลังจากเธอเห็นคนขับรถรางต้องทำสิ่งใดกลางพายุหิมะ?", a: "ยื่นหัวออกนอกหน้าต่างเพื่อมองทาง" },
        { q: "ในปี 1474 ไก่ตัวหนึ่งในสวิตเซอร์แลนด์ถูกนำขึ้นพิจารณาคดีบนศาลและถูกตัดสินเผาทั้งเป็นในข้อหาลึกลับใดเกี่ยวกับไข่?", a: "ออกไข่ที่ไม่มีไข่แดง (ถูกกล่าวหาว่าเป็นไข่สัตว์ประหลาด)" },
        { q: "ตัวทาร์ดิเกรด หรือ หมีน้ำ (Tardigrade) มีชื่อเสียงระดับโลกในฐานะสิ่งมีชีวิตที่อึดที่สุด เนื่องจากมันรอดชีวิตในสภาวะสุดขั้วใดนอกโลกได้?", a: "สุญญากาศและรังสีในอวกาศ" },
        { q: "ในปี 1962 เกิดโรคระบาดทางพฤติกรรมสุดแปลกที่ประเทศแทนซาเนีย (Tanganyika) โดยผู้คนในหมู่บ้านและโรงเรียนไม่สามารถหยุดทำสิ่งใดได้?", a: "หัวเราะ (โรคระบาดแห่งการหัวเราะ)" },
        { q: "ค่ายเกมยักษ์ใหญ่อย่าง นินเทนโด (Nintendo) เดิมทีถูกก่อตั้งขึ้นในปี 1889 ในฐานะบริษัทผู้ผลิตสินค้าประเภทใด?", a: "ไพ่ (ไพ่ฮานาฟุดะ)" },
        { q: "เสียงคำรามอันน่าสะพรึงกลัวของ ก็อดซิลล่า (Godzilla) ในภาพยนตร์ยุคแรก สร้างขึ้นจากการใช้วัสดุใดไปครูดลงบนสายเครื่องดนตรีดับเบิลเบส?", a: "ถุงมือหนังเคลือบเรซิน" },
        { q: "ในยุควิคตอเรียน หนังสือประเภท 'anthropodermic bibliopegy' ที่สะสมในพิพิธภัณฑ์ คือหนังสือที่ใช้สิ่งใดของมนุษย์มาทำเป็นปกหนังสือ?", a: "ผิวหนังมนุษย์" },
        { q: "หลุมยุบขนาดใหญ่ยักษ์ 'ประตูนรก' (Door to Hell) ในทวีปเอเชียกลางที่มีไฟลุกไหม้แก๊สธรรมชาติอย่างต่อเนื่องไม่เคยดับมาตั้งแต่ปี 1971 อยู่ในประเทศใด?", a: "ประเทศเติร์กเมนิสถาน" },
        { q: "ในปี 1862 เจ้าหน้าที่กระทรวงการคลังสหรัฐฯ คนหนึ่งก่อเรื่องอื้อฉาวระดับประเทศ โดยการแอบนำสิ่งใดไปสั่งพิมพ์ลงบนธนบัตรใบละ 5 เซนต์?", a: "รูปใบหน้าของตัวเอง" },
        { q: "นักบินอวกาศภารกิจ Apollo 12 แอบนำวัตถุชิ้นส่วนศิลปะขนาดจิ๋วที่เรียกว่า 'Moon Museum' ไปทิ้งไว้บนดวงจันทร์ ภายในมีลายเส้นวาดของศิลปินป๊อปอาร์ตคนใด?", a: "แอนดี้ วอร์ฮอล (Andy Warhol)" },
        { q: "ในปี 1992 ตู้สินค้าบนเรือบรรทุกสินค้าแตกกลางมหาสมุทรแปซิฟิก ทำให้นักวิทยาศาสตร์สามารถใช้สิ่งของของเล่นชนิดใดจำนวน 28,000 ชิ้นมาตามรอยกระแสน้ำโลก?", a: "เป็ดเหลือง / เป็ดยาง" },
        { q: "บริการไปรษณีย์ของสหรัฐฯ ช่วงปี 1913 เคยอนุญาตให้ประชาชนสามารถจัดส่งสิ่งมีชีวิตประเภทใดติดแสตมป์ส่งทางไปรษณีย์ได้ชั่วคราว?", a: "ทารก / เด็กเล็ก (โดยส่งไปบ้านญาติที่อยู่ใกล้ๆ)" },
        { q: "สัตว์เลี้ยงลูกด้วยนมในตระกูลมีกระเป๋าหน้าท้อง (เช่น จิงโจ้ หรือ โคอาลา) มีโครงสร้างอวัยวะสืบพันธุ์ตัวเมียที่แปลกประหลาดอย่างไร?", a: "มีช่องคลอด 3 ช่อง (และมดลูก 2 อัน)" },
        { q: "ในวันที่ 18 เมษายน ปี 1930 สำนักข่าววิทยุ BBC ได้ประกาศรายงานข่าวประจำวันที่สร้างความตกตะลึงและขบคิดไปทั่วประเทศว่าอย่างไร?", a: "'วันนี้ไม่มีข่าว' (แล้วเปิดเพลงเปียโนให้ฟังแทนทั้งวัน)" },
        { q: "ตัวตุ่นปากเป็ด (Platypus) ตัวผู้ มีอาวุธลับสุดอันตรายประเภทใดซ่อนอยู่บริเวณข้อเท้าหลังเพื่อใช้แทงต่อสู้ข้าศึก?", a: "เดือยพิษ" },
        { q: "ศิลปินแนวเหนือจริง ซัลวาดอร์ ดาลี (Salvador Dalí) เคยสร้างความฮือฮาและเป็นภาพจำไปทั่วปารีสโดยการเดินจูงสัตว์เลี้ยงสุดแปลกชนิดใดเดินเล่นตามท้องถนน?", a: "ตัวกินมด (Anteater)" },
        { q: "คำศัพท์เรียกปรากฏการณ์สภาพอากาศสุดแปลกประหลาดที่มีฝูงสัตว์ตัวเล็กๆ เช่น กบ ปลา หรือกุ้ง ร่วงหล่นมาจากก้อนเมฆท่วมเมืองเรียกว่าอะไร?", a: "ฝนสัตว์ / ฝนปลา" },
        { q: "ลิงกอริลลาสายพันธุ์ 'กอริลลาโลว์แลนด์ตะวันตก' มีความพิเศษในเรื่องชื่อวิทยาศาสตร์ของมันอย่างไร?", a: "ใช้คำว่า Gorilla ซ้ำกัน 3 ครั้ง (Gorilla gorilla gorilla)" },
		{ q: "ในปี 1986 ภัยพิบัตใดที่คร่าชีวิตผู้คนรอบข้างทะเลสาบมรณะ Nyos ไปกว่า 1,700 คน ในประเทศประเทศแคเมอรูน ทวีปแอฟริกา?", a: "แก๊สคาร์บอนไดออกไซด์ปะทุขึ้นมาจากใต้ทะเลสาบ" },
        { q: "บุรุษไปรษณีย์ชาวฝรั่งเศสนามว่า เฟอร์ดินานด์ เชอวาล ใช้เวลาว่าง 33 ปีในการสร้างสิ่งปลูกสร้างขนาดยักษ์สุดมหัศจรรย์ 'Le Palais Idéal' จากวัตถุดิบใดที่เขาเก็บได้ระหว่างเดินส่งจดหมาย?", a: "ก้อนหิน" },
				
		// update 4 extra 100 facts
		{ q: "แผ่นพลาสติกกันกระแทก (Bubble Wrap) ยอดฮิต เดิมทีถูกคิดค้นขึ้นในปี 1957 เพื่อให้เป็นสินค้าประเภทใด?", a: "วอลเปเปอร์ติดผนังบ้าน" },
        { q: "แป้งโดว์เด็กเล่น (Play-Doh) เดิมทีในทศวรรษ 1930 ถูกผลิตขึ้นมาขายเพื่อใช้ทำสิ่งใดในบ้าน?", a: "ทำความสะอาดคราบเขม่าบนวอลเปเปอร์" },
        { q: "เตาอบไมโครเวฟถูกคิดค้นขึ้นโดยบังเอิญ เมื่อวิศวกรผู้ทดสอบเรดาร์สงครามพบว่าสิ่งใดในกระเป๋าเสื้อของเขามันละลาย?", a: "ช็อกโกแลตแท่ง" },
        { q: "ซีเรียลอาหารเช้า Corn Flakes ถูกคิดค้นขึ้นโดยหมอเจฮาร์วีย์ คอลล็อกก์ โดยมีจุดประสงค์หลักเพื่อช่วยหยุดยั้งสิ่งใด?", a: "การช่วยตัวเอง / ความปรารถนาทางเพศ" },
        { q: "รองเท้าส้นสูง (High Heels) ในศตวรรษที่ 10 เดิมทีถูกออกแบบมาให้กลุ่มคนประเภทใดสวมใส่เพื่อความสะดวก?", a: "ทหาร / ผู้ชายขี่ม้า" },
        { q: "ไหมขัดฟันขนมหวาน (Cotton Candy) ถูกร่วมคิดค้นและจดสิทธิบัตรในปี 1897 โดยบุคคลที่มีอาชีพหลักน่าประหลาดใจใด?", a: "หมอฟัน / ทันตแพทย์" },
        { q: "น้ำอัดลมยี่ห้อ Mountain Dew เดิมทีในยุค 1940 ถูกคิดค้นขึ้นมาเพื่อใช้เป็นเครื่องดื่มผสมกับสิ่งใด?", a: "เหล้าวิสกี้ (Whiskey)" },
        { q: "ขนมมันฝรั่งแผ่นเลย์หรือโปเตโต้ชิป เกิดขึ้นครั้งแรกจากความหงุดหงิดของพ่อครัวที่จงใจหั่นมันฝรั่งบางเจี๊ยบประชดใคร?", a: "ลูกค้าที่เรื่องมากและคืนอาหารซ้ำๆ" },
        { q: "ยารักษาอาการเสื่อมสมรรถภาพทางเพศยอดฮิตอย่าง ไวอากร้า (Viagra) เดิมทีถูกพัฒนาขึ้นมาเพื่อใช้เป็นยารักษาโรคใด?", a: "โรคหัวใจ (ความดันและโรคหลอดเลือดหัวใจ)" },
        { q: "กาวตราช้างหรือกาวตราชนิดติดแน่นเร็ว (Super Glue) ถูกคิดค้นขึ้นโดยบังเอิญในช่วงสงครามโลกเพื่อใช้ทำสิ่งใด?", a: "ศูนย์เล็งพลาสติกใสของปืน" },
        { q: "แว่นตากันแดดถูกใช้งานครั้งแรกในประเทศจีนโบราณช่วงศตวรรษที่ 12 โดยไม่ได้มีไว้กันแดด แต่มีไว้เพื่อจุดประสงค์ใด?", a: "ให้ผู้พิพากษาใส่ซ่อนสีหน้าในศาล" },
        { q: "โลโก้รูปดอกไม้หลากสีอันเป็นเอกลักษณ์ของแบรนด์อมยิ้มชื่อดัง ชุปป้าชุปส์ (Chupa Chups) ถูกออกแบบโดยศิลปินระดับโลกคนใด?", a: "ซัลวาดอร์ ดาลี (Salvador Dalí)" },
        { q: "ศาลในประเทศไอร์แลนด์เคยมีคำตัดสินทางกฎหมายในปี 2020 ว่าขนมปังของร้าน Subway ไม่สามารถเรียกเป็น 'ขนมปัง' ได้เนื่องจากเหตุผลใด?", a: "มีปริมาณน้ำตาลสูงเกินไป" },
        { q: "การสั่งอาหารแบบ Drive-thru ของร้าน McDonald's ถูกสร้างขึ้นครั้งแรกใกล้ฐานทัพเพื่อให้บริการกลุ่มลูกค้าประเภทใด?", a: "ทหารที่ถูกห้ามลงจากรถขณะสวมเครื่องแบบ" },
        { q: "คุกกี้ทำนายโชค (Fortune Cookie) ที่มักแถมในร้านอาหารจีนทั่วโลก แท้จริงแล้วไม่ได้มีต้นกำเนิดในจีน แต่ถูกคิดค้นขึ้นที่ประเทศใด?", a: "สหรัฐอเมริกา (หรือญี่ปุ่น)" },
        { q: "ฝุ่นหรือคราบสีขาวนวลที่เกลื่อนอยู่บนผิวเปลือกของผลบลูเบอร์รีหรือองุ่นสด แท้จริงแล้วคือสารอะไรตามธรรมชาติ?", a: "ไขมันนวลป้องกันน้ำระเหย (Wax/Bloom)" },
        { q: "เนื้อเยื่อกรดในกระเพาะอาหารของมนุษย์มีความเป็นกรดรุนแรงมากจนสามารถย่อยสลายวัตถุโลหะชนิดใดได้?", a: "ใบมีดโกน" },
        { q: "ขนแปรงของแปรงฟันยุคโบราณก่อนที่จะมีการคิดค้นพลาสติกไนลอน ทำมาจากขนของสัตว์ชนิดใด?", a: "ขนหมู / ขนหมูป่า" },
        { q: "อวัยวะส่วนใดของร่างกายมนุษย์ที่มีจำนวนกระดูกรวมกันอยู่มากถึง 1 ใน 4 ของกระดูกทั้งหมดในร่างกาย?", a: "เท้า" },
        { q: "หัวใจของมนุษย์สามารถเต้นต่อได้อีกระยะหนึ่งแม้จะถูกผ่าแยกออกมานอกร่างกาย เนื่องจากมันมีระบบใดในตัวเอง?", a: "ระบบกระแสไฟฟ้าในตัวเอง" },
        { q: "ไส้ติ่ง (Appendix) ในร่างกายมนุษย์ที่เคยเชื่อว่าเป็นอวัยวะไร้ประโยชน์ แท้จริงแล้วเป็นคลังกักเก็บสิ่งสำคัญใด?", a: "แบคทีเรียตัวดีในลำไส้" },
        { q: "สัตว์ชนิดใดที่มีอุจจาระถ่ายออกมาเป็นรูปทรงลูกบาศก์ (สี่เหลี่ยมจัตุรัส) ชนิดเดียวในโลก?", a: "วอมแบท (Wombat)" },
        { q: "ลายนิ้วมือของสัตว์ชนิดใดที่มีความคล้ายคลึงกับลายนิ้วมือมนุษย์มากจนเคยทำให้นักสืบสับสนในสถานที่เกิดเหตุอาชญากรรม?", a: "โคอาลา (Koala)" },
        { q: "ขนของนกฟลามิงโกตามธรรมชาติเมื่อแรกเกิดไม่ได้เป็นสีชมพู แต่เป็นสีอะไร?", a: "สีเทา / สีขาว" },
        { q: "สัตว์สล็อต (Sloths) ที่เคลื่อนที่ช้ามาก ใช้เวลานานสูงสุดเท่าใดในการย่อยอาหารที่เป็นใบไม้เพียงใบเดียว?", a: "เกือบ 1 เดือน (3-4 สัปดาห์)" },
        { q: "นากทะเล (Sea Otters) มีพฤติกรรมสุดน่ารักในการเอามือจับกันไว้ขณะนอนหลับลอยน้ำเพื่อจุดประสงค์ใด?", a: "ป้องกันไม่ให้ตัวลอยแยกออกจากกัน" },
        { q: "กุ้งมังกรหรือกุ้งก้ามกราม (Lobster) มีพฤติกรรมทางชีววิทยาประหลาดในการรับรสชาติอาหารผ่านอวัยวะส่วนใด?", a: "ขา / ขนบริเวณขา" },
        { q: "นกหัวขวานจิกทุบต้นไม้ด้วยความเร็วสูงโดยที่สมองไม่ได้รับการกระทบกระเทือน เนื่องจากอวัยวะส่วนใดของมันยาวม้วนไปพันรอบสมองไว้?", a: "ลิ้น" },
        { q: "สัตว์เลื้อยคลาน 'กิ้งก่าหนาม' (Horned Lizard) มีกลไกการป้องกันตัวสุดสยองโดยการพ่นของเหลวชนิดใดออกมาจากดวงตาใส่ศัตรู?", a: "เลือด" },
        { q: "ม้าน้ำ (Seahorse) มีความแปลกประหลาดในระบบสืบพันธุ์มากกว่าสัตว์ชนิดอื่นอย่างไร?", a: "ตัวผู้เป็นฝ่ายตั้งท้องและออกลูก" },
        { q: "ฟันของสัตว์จำพวกหอยหมวกกะทะ (Limpets) ถูกจัดว่าเป็นวัตถุตามธรรมชาติที่มีความแข็งแกร่งที่สุดในโลกเหนือกว่าสิ่งใด?", a: "ใยแมงมุม / เหล็ก" },
        { q: "สถาบันอุดมศึกษาอย่าง มหาวิทยาลัยออกซฟอร์ด (Oxford) มีอายุเก่าแก่ยาวนานกว่าจักรวรรดิโบราณอเมริกาใต้ใด?", a: "จักรวรรดิแอซเทก (Aztec Empire)" },
        { q: "พระนางคลีโอพัตรา มีชีวิตอยู่ในช่วงเวลาที่ใกล้เคียงกับเหตุการณ์ประวัติศาสตร์โลกใดมากกว่ายุคสร้างพีระมิดกิซา?", a: "เหตุการณ์มนุษย์ลงจอดบนดวงจันทร์ (ปี 1969)" },
        { q: "ช้างแมมมอธขนยาวตัวสุดท้ายบนโลกเพิ่งสูญพันธุ์ไปในช่วงเวลาที่มนุษย์กำลังสร้างสิ่งปลูกสร้างโบราณใดอยู่?", a: "พีระมิดแห่งอียิปต์" },
        { q: "ตัวละคร มาริโอ (Mario) ในเกมค่าย Nintendo ถูกตั้งชื่อตามบุคคลที่มีตัวตนจริงซึ่งทำอาชีพอะไรในชีวิตจริงกับทีมงาน?", a: "เจ้าของที่ดิน/เจ้าของโกดังที่มาทวงค่าเช่า" },
        { q: "ชื่อเกมยอดฮิต Pac-Man เดิมทีในญี่ปุ่นใช้ชื่อว่า Puck-Man แต่ถูกเปลี่ยนชื่อเมื่อนำไปขายในอเมริกาเนื่องจากกลัวเรื่องใด?", a: "กลัวคนมือบอนไปขูดตัว P ให้กลายเป็นตัว F" },
        { q: "เทคโนโลยีการเชื่อมต่อไร้สาย บลูทูธ (Bluetooth) ตั้งชื่อตามกษัตริย์ไวกิ้งในอดีตซึ่งมีเอกลักษณ์เฉพาะตัวเรื่องใด?", a: "มีฟันหน้าสีฟ้า/เทาที่ตายแล้ว" },
        { q: "ภาพยนตร์เรื่อง ไททานิค (Titanic) ปี 1997 สแกนใช้งบประมาณในการสร้างภาพยนตร์สูงกว่าสิ่งใดในประวัติศาสตร์จริง?", a: "งบประมาณในการสร้างเรือไททานิกลำจริง" },
        { q: "เครื่องดื่มโลโก้รูปสัญลักษณ์ดาวแดงอย่างสไปรท์หรือแฟนต้ามีประวัติยาวนาน แต่ชื่อยี่ห้อ Fanta มาจากคำว่า Fantasie ในภาษาเยอรมัน แปลว่าอะไร?", a: "จินตนาการ (Imagination)" },
        { q: "บนดาวเคราะห์ขนาดใหญ่อย่างดาวเนปจูนและดาวยูเรนัส มีสภาพอากาศและแรงดันสุดขั้วจนเกิดปรากฏการณ์ตกลงมาจากฟ้าเป็นอะไร?", a: "เพชร (Rain of diamonds)" },
        { q: "ก้อนเมฆคิวมูลัสปุกปุยสีขาวที่เราเห็นลอยเบาๆ บนท้องฟ้า แท้จริงแล้วมีน้ำหนักเฉลี่ยเทียบเท่ากับสัตว์ขนาดยักษ์ชนิดใดกี่ตัว?", a: "ช้างประมาณ 100 ตัว (ราว 5 แสนกิโลกรัม)" },
        { q: "กล้วยหอมสดที่เรากินกันทั่วไป มีคุณสมบัติทางเคมีแปลกประหลาดตรงที่มันปล่อยสารประเภทใดออกมาในปริมาณจางๆ?", a: "กัมมันตภาพรังสี (จากโพแทสเซียม-40)" },
        { q: "แครอท ตามธรรมชาติก่อนจะถูกคัดสายพันธุ์โดยชาวเนเธอร์แลนด์ให้เป็นสีส้มในศตวรรษที่ 17 เดิมทีมีสีดั้งเดิมเป็นสีอะไร?", a: "สีม่วง (หรือสีเหลือง)" },
        { q: "สับปะรด มีเอนไซม์ชนิดหนึ่งชื่อ บรอมีเลน (Bromelain) ซึ่งย่อยสลายโปรตีน ส่งผลให้เกิดความรู้สึกใดขณะเราเคี้ยวกิน?", a: "แสบลิ้น / รู้สึกเหมือนสับปะรดกำลังย่อยเนื้อลิ้นเรา" },
        { q: "ดาวศุกร์ (Venus) มีความแปลกประหลาดทางดาราศาสตร์ในเรื่องการหมุนรอบตัวเองอย่างไรเมื่อเทียบกับระยะเวลาหมุนรอบดวงอาทิตย์?", a: "หนึ่งวันบนดาวศุกร์ยาวนานกว่าหนึ่งปีบนดาวศุกร์" },
        { q: "ดาวเสาร์ (Saturn) แม้จะเป็นดาวเคราะห์ขนาดยักษ์ แต่ความหนาแน่นเฉลี่ยของมันเบามากจนสามารถทำสิ่งใดได้หากมีอ่างน้ำยักษ์รองรับ?", a: "ลอยน้ำได้ (ความหนาแน่นน้อยกว่าน้ำ)" },
        { q: "อาการหาวนอน (Yawning) ไม่ได้ระบาดแค่ในหมู่มนุษย์ สัตว์เลี้ยงยอดนิยมชนิดใดที่สามารถ 'ติดหาว' ตามเจ้าของมนุษย์ได้เช่นกัน?", a: "สุนัข / หมา" },
        { q: "ตามหลักวิทยาศาสตร์และการแพทย์ มนุษย์ไม่สามารถทำกิจกรรมทางร่างกายใดได้พร้อมกันในขณะที่กำลังฝันยามหลับลึก?", a: "การนอนกรน" },
        { q: "เครื่องจับโกหก (Polygraph) ไม่ได้รับการยอมรับให้ใช้เป็นหลักฐานเด็ดขาดในศาลส่วนใหญ่ เนื่องจากเหตุผลใด?", a: "ไม่มีความแม่นยำทางวิทยาศาสตร์ (วัดแค่ความตื่นเต้น)" },
        { q: "แฝดแท้ที่กำเนิดจากไข่ใบเดียวกันจะมีดีเอ็นเอเหมือนกันเกือบ 100% แต่สิ่งใดในร่างกายที่ไม่เคยเหมือนกันเลย?", a: "ลายนิ้วมือ" },
        { q: "ความเชื่อที่ว่าการโกนขนหรือโกนหนวดจะทำให้ขนที่ขึ้นใหม่เส้นหนาและดำขึ้น แท้จริงแล้วเป็นเรื่องจริงหรือไม่?", a: "ไม่จริง (แค่มองเห็นปลายตัดตอขนที่ทู่)" },
        { q: "เลือดของมนุษย์ที่วิ่งอยู่ในเส้นเลือดดำภายในร่างกายก่อนสัมผัสออกซิเจน แท้จริงแล้วมีสีอะไร?", a: "สีแดงเข้ม (ไม่ใช่สีน้ำเงิน)" },
        { q: "ดวงตาของมนุษย์หยุดการเจริญเติบโตเกือบสมบูรณ์ตั้งแต่เด็ก แต่อวัยวะสองส่วนใดบนใบหน้าที่ขยายขนาดใหญ่อยู่ตลอดชีวิต?", a: "จมูก และ หู" },
        { q: "แอปเปิลสดสามารถลอยน้ำได้เนื่องจากปริมาณมวลภายในผลของมันประกอบไปด้วยสิ่งใดมากถึง 25%?", a: "อากาศ" },
        { q: "เม็ดมะม่วงหิมพานต์ มีรูปแบบการเจริญเติบโตแปลกประหลาดแตกต่างจากถั่วชนิดอื่นอย่างไร?", a: "งอกโตอยู่ภายนอกใต้ผลมะม่วงหิมพานต์" },
        { q: "ถั่วลิสง (Peanuts) ตามหลักพฤกษศาสตร์ ไม่ได้จัดอยู่ในตระกูลถั่วเปลือกแข็ง (Nuts) แต่จัดอยู่ในพืชตระกูลใด?", a: "พืชตระกูลถั่วฝัก / พืชตระกูลถั่วลันเตา (Legumes)" },
        { q: "ในทางพฤกษศาสตร์ กล้วยและแตงโมจัดเป็นผลไม้ตระกูลเบอร์รี (Berry) แต่ผลไม้ชนิดใดที่มีคำว่าเบอร์รีในชื่อกลับไม่ใช่เบอร์รีแท้?", a: "สตรอว์เบอร์รี" },
        { q: "การดัดข้อต่อนิ้วจนเกิดเสียงดัง 'ก๊อก' แท้จริงแล้วเกิดจากปรากฏการณ์ใดในน้ำหล่อลื่นข้อต่อ?", a: "การแตกตัวของฟองแก๊ส" },
        { q: "การไม่ออกกำลังกายและขาดสารอาหารน่ากลัว แต่มนุษย์สามารถเสียชีวิตจากการขาดสิ่งใดได้ไวกว่าการอดอาหาร?", a: "การขาดการนอนหลับ" },
        { q: "ตุ่มรับรสบนลิ้นของมนุษย์มีการผลัดเซลล์และสร้างขึ้นใหม่ทดแทนของเดิมประมาณทุกๆ กี่สัปดาห์?", a: "1 ถึง 2 สัปดาห์" },
        { q: "ความร้อนจากลำแสงสายฟ้าผ่าลงพื้นโลก 1 ครั้ง มีอุณหภูมิสูงกว่าพื้นผิวของสิ่งใดในอวกาศถึง 5 เท่า?", a: "พื้นผิวของดวงอาทิตย์" },
        { q: "กระจกเงาหรือกระจกใสที่ใช้ตามบ้าน ไม่ได้มีสถานะเป็นของเหลวที่ไหลช้าๆ แต่ทางวิทยาศาสตร์จัดเป็นสถานะใด?", a: "ของแข็งอสัณฐาน (Amorphous solid)" },
        { q: "ในสภาวะสุญญากาศของอวกาศ น้ำเปล่าจะเกิดปฏิกิริยาอย่างไรทันทีเนื่องจากไม่มีแรงดันอากาศ?", a: "เดือดพล่านทันทีแล้วเปลี่ยนเป็นเกล็ดน้ำแข็ง" },
        { q: "ผลไม้อย่าง อะโวคาโด มีสารเคมีชื่อ เพอร์ซิน (Persin) ซึ่งปลอดภัยต่อมนุษย์ แต่อันตรายถึงชีวิตต่อสัตว์เลี้ยงชนิดใด?", a: "นก / สุนัข / ม้า" },
        { q: "นีล อาร์มสตรอง มนุษย์คนแรกที่เหยียบดวงจันทร์ เมื่อเดินทางกลับถึงโลกเขาต้องติดต่อหน่วยงานราชการใดก่อน?", a: "ศุลกากร (ยื่นใบสำแดงของนำเข้า)" },
        { q: "การจับมือทักทายแบบ ไฮไฟฟ์ (High Five) เพิ่งถูกคิดค้นและใช้แพร่หลายครั้งแรกในการแข่งขันกีฬาชนิดใดในปี 1977?", a: "เบสบอล (หรือ บาสเกตบอล)" },
        { q: "การสะอึก (Hiccups) เกิดจากการเกร็งตัวผิดจังหวะของอวัยวะแผ่นกล้ามเนื้อส่วนใดในร่างกาย?", a: "กะบังลม (Diaphragm)" },
        { q: "สัตว์ชนิดใดที่มีความสามารถในการมองเห็นสีสันได้มากถึง 16 ตัวรับสี (ขณะที่ตา มนุษย์มองเห็นแค่ 3 ตัวรับสี)?", a: "กุ้งตั๊กแตนตำข้าว (Mantis Shrimp)" },
        { q: "ปลิงทะเล (Sea Cucumber) มีกลไกป้องกันตัวสุดพิสดารเมื่อถูกคุกคาม โดยการพ่นอวัยวะส่วนใดออกมาทางรูตูด?", a: "อวัยวะภายใน / อวัยวะเพศและลำไส้" },
        { q: "นกกา (Crows) มีความเฉลียวฉลาดสูงมาก โดยพวกมันสามารถจดจำสิ่งใดของมนุษย์และผูกใจเจ็บได้ยาวนานหลายปี?", a: "ใบหน้าของมนุษย์" },
        { q: "โลมา (Dolphin) มีวิธีกระสุนสัญญาณสื่อสารเฉพาะตัวเพื่อใช้ทำสิ่งใดกับสมาชิกเพื่อนโลมาในฝูง?", a: "เรียกชื่อเฉพาะตัวของกันและกัน" },
        { q: "พึ่งผึ้ง (Honeybees) มีวิธีการสื่อสารพิกัดตำแหน่งของดอกไม้ให้เพื่อนในรังรู้ได้อย่างแม่นยำผ่านการทำสิ่งใด?", a: "การเต้นรำ (Waggle Dance)" },
        { q: "ดาวสุกรหรือปลาดาว (Starfish) หากถูกตัดแขนขาดไปหนึ่งข้าง มันสามารถทำสิ่งใดได้สุดมหัศจรรย์?", a: "งอกร่างใหม่ทั้งตัวจากแขนข้างเดียว" },
        { q: "ฉลามกรีนแลนด์ (Greenland Shark) ถูกบันทึกว่าเป็นสัตว์มีกระดูกสันหลังที่มีอายุยืนที่สุดในโลก โดยสามารถมีอายุได้มากถึงกี่ปี?", a: "มากกว่า 400 ปี" },
        { q: "นกพิราบ เคยถูกนักจิตวิทยา B.F. Skinner นำมาฝึกฝนในโครงการลับของกองทัพเพื่อใช้ทำหน้าที่อะไรในสงคราม?", a: "ขับเคลื่อนบังคับวิถีลูกมิสไซล์/ระเบิด" },
        { q: "ป้ายเตือนอันตรายรูปหัวกะโหลกไขว้ (Skull and Crossbones) ในอดีตยุคศตวรรษที่ 19 เคยถูกนำมาใช้ติดบนสิ่งใดเพื่อป้องกันเด็กหยิบ?", a: "ขวดยาพิษ / ยาอันตราย" },
        { q: "ตัวหนังสือสัญลักษณ์ 'point' หรือจุดบนตัวอักษรภาษาอังกฤษ i และ j มีชื่อเรียกเฉพาะทางเทคนิคว่าอะไร?", a: "Tittle" },
        { q: "ประเทศสวิตเซอร์แลนด์ มีกฎหมายคุ้มครองสัตว์เลี้ยงสุดแปลกโดยห้ามเลี้ยงสัตว์ชนิดใดแค่ตัวเดียวเด็ดขาดเพราะกลัวมันเหงา?", a: "หนูแกสบี้ (Guinea Pig)" },
        { q: "ผลไม้ลูกโตอย่าง สับปะรด ในยุคศตวรรษที่ 18 ถือเป็นสัญลักษณ์แห่งความมั่งคั่งสูงมากจนผู้คนนิยมทำสิ่งใดกับมันในงานเลี้ยง?", a: "เช่ามาถือเดินโชว์ในงานปาร์ตี้" },
        { q: "ขนมปัง Twinkies ยอดฮิต เดิมทีไส้ครีมข้างในก่อนช่วงสงครามโลกครั้งที่ 2 ไม่ใช่รสวานิลลา แต่เป็นรสชาติผลไม้ใด?", a: "รสกล้วยหอม" },
        { q: "สก็อตแลนด์ มีสัตว์ประจำชาติอย่างเป็นทางการที่ไม่ใช่สัตว์ที่มีอยู่จริงในธรรมชาติ แต่เป็นสัตว์ชนิดใด?", a: "ยูนิคอร์น (Unicorn)" },
        { q: "ผู้ผลิตการ์ดเกมหรือบอร์ดเกม Monopoly เคยแอบดัดแปลงชุดเกมเพื่อช่วยเชลยศึกสงครามโลกโดยการซ่อนสิ่งใดไว้ข้างในกระดาน?", a: "แผนที่ผ้าจริงและเงินจริง" },
        { q: "คำศัพท์ทางเวชศาสตร์ที่ใช้เรียกอาการกลัวคำยาวๆ อย่าง Hippopotomonstrosesquippedaliophobia มีความกวนอย่างไร?", a: "เป็นคำศัพท์ที่ยาวมากจนคนกลัวคำยาวอ่านไม่ได้" },
        { q: "ในปี 2014 หญิงท่องเที่ยวคนหนึ่งในประเทศไอซ์แลนด์ถูกรายงานว่าสูญหาย แต่สุดท้ายพบว่าเธอไปอยู่ที่ไหน?", a: "เข้าร่วมทีมค้นหาตัวเองโดยไม่รู้ว่าหาตัวเองอยู่" },
        { q: "บริษัท eBay ทำการขายสินค้าชิ้นแรกสุดในประวัติศาสตร์เว็บไซต์ในปี 1995 สินค้าชิ้นนั้นคืออะไร?", a: "ปากกาเลเซอร์พอยเตอร์ที่เสียแล้ว" },
        { q: "สัตว์เลี้ยงลูกด้วยนมที่เคลื่อนที่ช้าอย่าง สล็อต (Sloth) สามารถกลั้นหายใจใต้น้ำได้นานกว่าสัตว์ทะเลชนิดใด?", a: "โลมา (Dolphin)" },
        { q: "ผีเสื้อ (Butterflies) มีอวัยวะรับรสชาติอาหารแปลกประหลาดตั้งอยู่ที่บริเวณส่วนใดของร่างกาย?", a: "เท้า" },
        { q: "เครื่องดื่มยอดฮิตอย่าง เป๊ปซี่ (Pepsi) เดิมทีถูกคิดค้นขึ้นโดยเภสัชกรเพื่อใช้เป็นยารักษาอาการใด?", a: "อาการอาหารไม่ย่อย / ปวดท้อง" },
        { q: "สัตว์ชนิดใดที่สามารถนอนหลับลึกยาวนานต่อเนื่องได้มากที่สุดถึง 3 ปีโดยไม่ตื่น?", a: "หอยทาก (Snail)" },
        { q: "ในประเทศญี่ปุ่น มีธรรมเนียมการเฉลิมฉลองรับประทานอาหารเย็นในวันคริสต์มาสอีฟด้วยอาหารฟาสต์ฟู้ดยี่ห้อใด?", a: "ไก่ทอด KFC" },
        { q: "ฝุ่นบนดวงจันทร์ ที่ติดมากับชุดของนักบินอวกาศ Apollo ถูกบันทึกไว้ว่ามีกลิ่นคล้ายกับสิ่งใด?", a: "ดินปืนที่เพิ่งใช้นำเสนอ / เนื้อสเต็กไหม้" },
        { q: "นกเหยี่ยวไฟออสเตรเลีย (Australian Firehawks) มีพฤติกรรมสุดฉลาดและน่ากลัวในการล่าเหยื่อโดยการทำสิ่งใด?", a: "คาบกิ่งไม้ติดไฟไปจุดคาบป่าเปิดทางล่าเหยื่อ" },
        { q: "ในอดีตยุคศตวรรษที่ 16 ผู้มีฐานะในยุโรปเคยนำส่วนประกอบสยองขวัญชนิดใดมาบดเป็นผงเพื่อรับประทานเป็นยาถอดพิษ?", a: "มัมมี่อียิปต์" },
        { q: "เครื่องดนตรีชนิดแรกที่ถูกนำขึ้นไปเล่นและออกอากาศเพลงบนอวกาศคือเครื่องดนตรีประเภทใด?", a: "ฮาร์โมนิกา (Harmonica)" },
        { q: "ผลไม้เขตร้อนอย่าง 'มะละกอ' มีเอนไซม์ปาเปน (Papain) ที่นิยมนำมาใช้ประโยชน์ในอุตสาหกรรมอาหารเรื่องใด?", a: "การทำให้เนื้อสัตว์นุ่มลง" },
				
		// update 7 extra 100 facts
		{ q: "สัตว์อะไรมี 3 หัวใจ?", a: "ปลาหมึกยักษ์ (Octopus)" },
		{ q: "ในทางพฤกษศาสตร์กล้วยเป็นพืชประเภทใด?", a: "เบอร์รี่" },
		{ q: "ผิวหนังจริงๆ ของหมีขั้วโลกมีสีอะไร?", a: "สีดำ (ส่วนขนนั้นโปร่งแสง ไม่ใช่สีขาว)" },
		{ q: "สัตว์บกอะไรมีจมูกถึง 4 อัน?", a: "ทาก (Slug)" },
		{ q: "ดาวเคราะห์ดวงไหนร้อนที่สุดในระบบสุริยะ?", a: "ดาวศุกร์ (ไม่ใช่ดาวพุธที่อยู่ใกล้ที่สุด)" },
		{ q: "อาหารอะไรที่ไม่มีวันหมดอายุหรือเน่าเสีย?", a: "น้ำผึ้งแท้" },
		{ q: "ถั่วลิสง (Peanut) ถูกจัดให้อยู่ในกลุ่มพืชตระกูลใด?", a: "ตระกูลถั่วฝัก (Legume) แบบเดียวกับถั่วลันเตา" },
		{ q: "เหงื่อของฮิปโปโปเตมัสมีสีอะไร?", a: "สีแดง (ทำหน้าที่เป็นทั้งครีมกันแดดและยาปฏิชีวนะ)" },
		{ q: "อวัยวะใดในร่างกายมนุษย์ที่ไม่เคยหยุดโต?", a: "จมูกและหู" },
		{ q: "กรดในกระเพาะอาหารของมนุษย์สามารถละลายอะไรได้?", a: "ใบมีดโกน" },
		{ q: "สภาพแวดล้อมใดบนโลกที่ทำให้คลื่นเสียงเคลื่อนที่ผ่านได้เร็วกว่าอาการถึงสี่เท่า?", a: "ใต้น้ำ" },
		{ q: "อักษรใดในภาษาอังกฤษที่ถูกใช้บ่อยที่สุด?", a: "ตัว E" },
		{ q: "อวัยวะใดของผีเสื้อที่ใช้รับรสชาติอาหาร?", a: "เท้า" },
		{ q: "สัตว์ใดสามารถนอนหลับต่อเนื่องได้นานที่สุดถึง 3 ปี?", a: "หอยทาก" },
		{ q: "สัตว์บกอะไรอั้นหายใจได้นานกว่าโลมา?", a: "สลอธ (อั้นได้นานถึง 40 นาทีเพื่อลดอัตราการเต้นของหัวใจ)" },
		{ q: "มีพายุฝนตกลงมาเป็น 'เพชร' บนดาวเคราะห์ดวงใด?", a: "ดาวพฤหัสบดีและดาวเสาร์" },
		{ q: "นกฟลามิงโกมีสีชมพูเพราะอะไร?", a: "อาหารที่กิน (กุ้งและสาหร่ายที่มีสารแคโรทีนอยด์)" },
		{ q: "กระดูกที่เล็กที่สุดในร่างกายมนุษย์อยู่ที่ไหน?", a: "ในหูชั้นกลาง (กระดูกโกลน หรือ Stapes)" },
		{ q: "มนุษย์ในช่วงวัยใดที่มีจำนวนชิ้นกระดูกในร่างกายเยอะที่สุด?", a: "วัยทารก (ก่อนจะเชื่อมประสานกันในตอนโต)" },
		{ q: "ส่วนใดของร่างกายมนุษย์ที่สามารถขยับได้โดยปราศจากกล้ามเนื้อของตัวมันเอง?", a: "นิ้วมือ (ขยับได้ด้วยเส้นเอ็นที่เชื่อมกับกล้ามเนื้อแขน)" },
		{ q: "สิ่งมีชีวิตใดบนโลกที่มีจำนวนมหาศาลทิ้งห่างปริมาณดาวฤกษ์ในกาแล็กซีทางช้างเผือก?", a: "ต้นไม้" },
		{ q: "แครอทในอดีตยุคแรกๆ มีสีอะไร?", a: "สีม่วง (หรือสีเหลือง)" },
		{ q: "สถาบันการศึกษาใดในยุโรปที่มีประวัติศาสตร์การก่อตั้งเก่าแก่กว่ายุคอาณาจักรแอซเท็ก?", a: "มหาวิทยาลัยออกซ์ฟอร์ด" },
		{ q: "ขนมสายไหม (Cotton Candy) ถูกคิดค้นโดยคนอาชีพอะไร?", a: "ทันตแพทย์" },
		{ q: "สัตว์อะไรไม่สามารถเงยหน้ามองขึ้นไปบนฟ้าได้?", a: "หมู" },
		{ q: "เฟรนช์ฟรายส์ (French Fries) มีต้นกำเนิดมาจากประเทศอะไร?", a: "เบลเยียม" },
		{ q: "อวัยวะส่วนใดของสุนัขที่มีลวดลายเฉพาะตัวสำหรับใช้ระบุตัวตนได้เหมือนลายนิ้วมือคน?", a: "จมูก (Nose print)" },
		{ q: "ลักษณะนิสัยทางสังคมที่โดดเด่นของวัวเมื่ออยู่รวมฝูงคืออะไร?", a: "การมีเพื่อนสนิทและการจับกลุ่มผูกมิตร" },
		{ q: "เล็บส่วนใดของมนุษย์ที่มีอัตราการยาวไวกว่าส่วนอื่นอย่างเห็นได้ชัด?", a: "เล็บมือ" },
		{ q: "ปัจจัยใดที่ทำให้รอยประทับของนักบินอวกาศสามารถคงอยู่บนผิวดวงจันทร์ได้ตลอดกาล?", a: "การไม่มีกระแสลมและแหล่งน้ำคอยพัดพาร่องรอย" },
		{ q: "มวลน้ำหนักรวมของก้อนเมฆคิวมูลัสขนาดเฉลี่ยหนึ่งก้อนมีความหนักเทียบเท่าฝูงสัตว์ชนิดใด?", a: "ช้าง (นับร้อยตัว)" },
		{ q: "คุณสมบัติทางกายภาพใดที่ทำให้ผลแอปเปิลสามารถลอยอยู่เหนือน้ำได้?", a: "การมีช่องว่างของอากาศอยู่ภายในเนื้อผลไม้" },
		{ q: "เครื่องอำนวยความสะดวกใดที่สร้างสถิติอุบัติเหตุล้มทับคร่าชีวิตผู้คนได้มากกว่าการถูกฉลามกัด?", a: "ตู้กดน้ำอัตโนมัติ (Vending Machine)" },
		{ q: "รสชาติอาหารรูปแบบใดที่แมวสูญเสียความสามารถในการรับรู้ไปโดยสิ้นเชิง?", a: "รสหวาน" },
		{ q: "แสงของดวงอาทิตย์ในยามพลบค่ำบนดาวอังคารจะปรากฏเป็นสีอะไร?", a: "สีฟ้า" },
		{ q: "ประเทศใดที่เป็นจุดกำเนิดของการนำสับปะรดมาจัดวางบนหน้าพิซซ่าฮาวายเอี้ยนเป็นครั้งแรก?", a: "แคนาดา" },
		{ q: "ความผิดปกติของเวลาบนดาวศุกร์เมื่อเทียบคาบการหมุนรอบตัวเองกับการโคจรรอบดวงอาทิตย์คืออะไร?", a: "เวลาหนึ่งวันบนดาวศุกร์ยาวนานกว่าเวลาหนึ่งปี" },
		{ q: "ลักษณะทางเรขาคณิตของก้อนมูลวอมแบท (Wombat) มีรูปทรงประหลาดอย่างไร?", a: "รูปทรงลูกบาศก์" },
		{ q: "กลิ่นสัมผัสของห้วงอวกาศเมื่อเทียบกับสิ่งแวดล้อมบนโลกจะคล้ายกับกลิ่นของอะไร?", a: "สเต็กไหม้ หรือ ดินปืน" },
		{ q: "เหตุใดมนุษย์จึงไม่สามารถเปล่งเสียงฮัมเพลงออกมาได้เมื่อเอามือบีบจมูกตัวเองไว้สนิท?", a: "เพราะทางเดินอากาศถูกปิดกั้นทำให้ลมระบายออกเพื่อสร้างเสียงไม่ได้" },
		{ q: "แฟชั่นรองเท้าส้นสูงในยุคอดีตถูกออกแบบมาเพื่อรองรับการใช้งานของคนกลุ่มใด?", a: "ผู้ชาย (สำหรับทหารม้าใช้ยึดกับโกลน)" },
		{ q: "จุดประสงค์ดั้งเดิมของการประดิษฐ์เครื่องลู่วิ่งไฟฟ้า (Treadmill) คืออะไร?", a: "ใช้เป็นเครื่องจักรทรมานนักโทษในเรือนจำ" },
		{ q: "นวัตกรรมพลาสติกกันกระแทก (Bubble Wrap) ถูกตั้งเป้าผลิตขึ้นมาเพื่อใช้เป็นอะไรในยุคแรก?", a: "วอลเปเปอร์ติดผนัง" },
		{ q: "หากเราพับกระดาษทบกันไปเรื่อยๆ อย่างต่อเนื่อง ความหนาของมันจะพุ่งทะยานไปชนกับเป้าหมายใดในอวกาศ?", a: "ดวงจันทร์" },
		{ q: "กลไกการเก็บซ่อนลิ้นที่ยาวผิดปกติของนกหัวขวานมีลักษณะอย่างไร?", a: "พันเก็บไว้รอบกะโหลกศีรษะเพื่อรับแรงกระแทก" },
		{ q: "เหตุการณ์สำคัญในยุคเทคโนโลยีใดที่มีช่วงเวลาใกล้เคียงกับช่วงชีวิตของคลีโอพัตรามากกว่ายุคสร้างพีระมิด?", a: "ยุคการเปิดตัวสมาร์ตโฟน (iPhone)" },
		{ q: "ผลิตภัณฑ์ชนิดแรกที่เป็นจุดเริ่มต้นความสำเร็จของบริษัทเกมนินเทนโดคืออะไร?", a: "ไพ่ฮานะฟุดะ" },
		{ q: "ในทางพฤกษศาสตร์ ผลไม้จำพวกแตงโมถูกจัดจำแนกให้อยู่ในสายพันธุ์ใด?", a: "ตระกูลเบอร์รี่" },
		{ q: "คุณสมบัติมหัศจรรย์ของแมงกะพรุนสายพันธุ์ Turritopsis dohrnii คืออะไร?", a: "ความเป็นอมตะจากการย้อนวัยตัวเองกลับเป็นตัวอ่อนได้เรื่อยๆ" },
		{ q: "ทักษะการเคลื่อนไหวร่างกายรูปแบบใดที่สัตว์ใหญ่อย่างช้างไม่สามารถทำได้?", a: "การกระโดด" },
		{ q: "ประเทศใดบนโลกที่มีพื้นที่อาณาเขตกว้างใหญ่ไพศาลยิ่งกว่าผิวของดาวเคราะห์แคระพลูโต?", a: "ประเทศรัสเซีย" },
		{ q: "เทห์ฟากฟ้าใดที่เป็นศูนย์รวมมวลสารเกือบทั้งหมดของระบบสุริยะ?", a: "ดวงอาทิตย์" },
		{ q: "สถานที่ฟักไข่และอนุบาลลูกอ๊อดของกบดาร์วิน (Darwin's frog) ซ่อนอยู่ที่ส่วนใดของร่างกาย?", a: "ถุงเสียงใต้คาง (Vocal sac)" },
		{ q: "สีของเหลวที่ไหลเวียนในร่างกายปลาหมึกยักษ์มีลักษณะแตกต่างจากเลือดมนุษย์อย่างไร?", a: "เป็นสีน้ำเงิน" },
		{ q: "อวัยวะส่วนใดของหอยทากที่เป็นแหล่งรวบรวมฟันซี่จิ๋วไว้เป็นจำนวนมหาศาล?", a: "บนลิ้น (Radula)" },
		{ q: "อนุภาคละอองฝุ่นส่วนใหญ่ที่ลอยสะสมอยู่ในบ้านเรือนมีต้นกำเนิดมาจากอะไร?", a: "เซลล์ผิวหนังที่ตายแล้วของมนุษย์" },
		{ q: "สภาพภูมิประเทศดั้งเดิมของทะเลทรายซาฮาราเมื่อหลายพันปีก่อนมีลักษณะเป็นอย่างไร?", a: "ป่าฝนเขตร้อนและพื้นที่ทะเลสาบอุดมสมบูรณ์" },
		{ q: "ปรากฏการณ์สภาพอากาศรุนแรงใดที่พุ่งทะยานลงสู่พื้นโลกอย่างต่อเนื่องตลอดเวลาทุกวินาที?", a: "ปรากฏการณ์ฟ้าผ่า" },
		{ q: "สารประกอบโพแทสเซียมในกล้วยทำให้ผลไม้ชนิดนี้มีคุณสมบัติแอบแฝงเรื่องใด?", a: "การแผ่กัมมันตภาพรังสีอ่อนๆ" },
		{ q: "สภาวะพิเศษทางอุณหภูมิพลศาสตร์ที่ทำให้น้ำสามารถเดือดและกลายเป็นน้ำแข็งพร้อมกันได้เรียกว่าอะไร?", a: "จุดร่วมสาม (Triple Point)" },
		{ q: "สายวิวัฒนาการของสิ่งมีชีวิตจำพวกเห็ดรามีความเชื่อมโยงกับเผ่าพันธุ์ใดเป็นพิเศษ?", a: "เผ่าพันธุ์สัตว์ (ใกล้ชิดมากกว่าพืช)" },
		{ q: "อานุภาพความรุนแรงจากการดีดหมัดของกั้งตั๊กแตนเจ็ดสีมีความเร็วเทียบเท่ากับสิ่งใด?", a: "กระสุนปืนลูกกรด" },
		{ q: "ทิศทางการเคลื่อนที่รูปแบบใดที่จิงโจ้ถูกจำกัดด้วยโครงสร้างของหางและขาหลัง?", a: "การเดินถอยหลัง" },
		{ q: "นกสายพันธุ์ใดที่มีเอกลักษณ์พิเศษในการกระพือปีกทวนทิศทางเพื่อบินถอยหลังกลางอากาศได้?", a: "นกฮัมมิงเบิร์ด" },
		{ q: "ลักษณะความผิดส่วนทางสรีรวิทยาระหว่างดวงตาและสมองของนกกระจอกเทศเป็นอย่างไร?", a: "ดวงตามีขนาดใหญ่กว่าสมองของมัน" },
		{ q: "นักล่าสายพันธุ์ใดในท้องทะเลที่ถือกำเนิดขึ้นบนโลกก่อนการปรากฏตัวของพรรณไม้ประเภทยืนต้น?", a: "ฉลาม" },
		{ q: "พื้นผิวภายนอกของลูกกอล์ฟมีลักษณะการออกแบบอย่างไรเพื่อช่วยเพิ่มหลักอากาศพลศาสตร์ให้ลอยได้ไกลขึ้น?", a: "การทำผิวให้เป็นรอยบุ๋ม (Dimples) ทั่วทั้งลูก" },
		{ q: "ชื่อเต็มอย่างเป็นทางการของตุ๊กตาแฟชั่นบาร์บี้คืออะไร?", a: "Barbara Millicent Roberts" },
		{ q: "ตัวละครมาริโอ้ในเกมภาคคลาสสิกใช้อวัยวะส่วนใดในการกระแทกบล็อกอิฐทำลายด่าน?", a: "หมัด" },
		{ q: "อาหารชนิดใดที่เป็นแรงบันดาลใจในการวาดโครงร่างของตัวละครแพคแมน (Pac-Man)?", a: "พิซซ่าที่ถูกตัดส่วนแบ่งออกไป" },
		{ q: "ชื่อเรียกศัพท์เฉพาะอย่างเป็นทางการของเครื่องหมายแฮชแท็ก (#) คืออะไร?", a: "Octothorpe" },
		{ q: "แนวคิดหลักในการวางเลย์เอาต์แป้นพิมพ์ QWERTY ในยุคเครื่องพิมพ์ดีดคืออะไร?", a: "เพื่อถ่วงเวลาการพิมพ์ของมนุษย์ให้ช้าลง (ป้องกันก้านพิมพ์ขัดกัน)" },
		{ q: "เหตุใดโลหะมีค่าอย่างทองคำจึงปลอดภัยต่อการนำมารับประทานตกแต่งจานอาหาร?", a: "เพราะเป็นแร่ที่ไม่เกิดปฏิกิริยากับระบบย่อยหรือสารเคมีในร่างกาย" },
		{ q: "ปลายทางการเคลื่อนตัวของแผ่นเปลือกโลกกำลังนำพาหมู่เกาะฮาวายให้ขยับเข้าหาดินแดนประเทศใด?", a: "ประเทศญี่ปุ่น" },
		{ q: "ปริมาณน้ำลายสะสมตลอดช่วงชีวิตของมนุษย์หนึ่งคนสามารถนำไปใช้กับสิ่งปลูกสร้างใดได้?", a: "เติมเต็มสระว่ายน้ำโอลิมปิก" },
		{ q: "กลไกการสืบพันธุ์และการอุ้มท้องของม้าน้ำมีความแปลกประหลาดสลับขั้วกับสัตว์อื่นอย่างไร?", a: "ม้าน้ำตัวผู้ทำหน้าที่อุ้มท้องแทน" },
		{ q: "ขนาดดวงตาของหมึกกล้วยยักษ์มีความใหญ่โตเทียบเท่ากับอุปกรณ์กีฬาชนิดใด?", a: "ลูกบาสเกตบอล" },
		{ q: "ดาวเคราะห์ดวงใดที่กุมสถิติการมีดวงจันทร์บริวารโคจรล้อมรอบมากที่สุดในระบบสุริยะ?", a: "ดาวเสาร์" },
		{ q: "สสารของเหลวที่เป็นองค์ประกอบหลักในการสร้างโครงสร้างสมองมนุษย์คืออะไร?", a: "น้ำ" },
		{ q: "เมื่อเทียบในอัตราส่วนน้ำหนักที่เท่ากัน โครงสร้างกระดูกมนุษย์มีความแข็งแกร่งทนทานกว่าวัสดุอุตสาหกรรมชนิดใด?", a: "เหล็กกล้า (Steel)" },
		{ q: "วงจรชีวิตของต้นสับปะรดมีอุปสรรคเรื่องระยะเวลาการเพาะปลูกอย่างไร?", a: "ต้องใช้เวลาหลายปีกว่าจะเติบโตและออกผลให้เก็บเกี่ยวได้" },
		{ q: "เมล็ดโกโก้ถูกนำมาใช้ประโยชน์ในด้านใดนอกเหนือจากเป็นอาหารในยุคจักรวรรดิแอซเท็ก?", a: "ใช้เป็นเงินตราในการแลกเปลี่ยนสินค้า" },
		{ q: "ประเทศต้นตำรับที่แท้จริงของการคิดค้นขนมฟอร์จูนคุกกี้ (Fortune Cookies) คือประเทศใด?", a: "ญี่ปุ่น" },
		{ q: "เมนูขนมอบชื่อดังอย่างครัวซองต์มีประวัติศาสตร์เริ่มต้นมาจากดินแดนประเทศใด?", a: "ออสเตรีย" },
		{ q: "ประเทศในทวีปอเมริกาเหนือประเทศใดที่เป็นสถานที่กำเนิดของเมนูซีซาร์สลัด?", a: "เม็กซิโก" },
		{ q: "สภาพแวดล้อมการจัดเก็บแบบใดที่ช่วยยืดอายุการใช้งานของยางรัดของให้นานขึ้น?", a: "พื้นที่เย็นจัด เช่น ในตู้เย็น" },
		{ q: "คุณสมบัติทางฟิสิกส์ใดของก๊าซฮีเลียมที่ส่งผลให้เสียงของมนุษย์เปลี่ยนไปเมื่อสูดดมเข้าไป?", a: "ความเร็วของคลื่นเสียงที่เดินทางผ่านเนื้อก๊าซได้รวดเร็วกว่าอากาศปกติ" },
		{ q: "สารสกัดจากถั่วลิสงสามารถนำไปประยุกต์ใช้ในการผลิตอาวุธสงครามชนิดใด?", a: "ระเบิดไดนาไมต์" },
		{ q: "ทักษะด้านตรรกะแบบใดที่นกพิราบมีความสามารถทำความเข้าใจได้ทัดเทียมกับลิง?", a: "กฎเกณฑ์ทางคณิตศาสตร์พื้นฐาน" },
		{ q: "ความทรงจำสุดทึ่งของอีกาเกี่ยวกับการรับมือศัตรูคืออะไร?", a: "การจดจำใบหน้าคนและการส่งต่อความแค้นไปยังอีกาตัวอื่น" },
		{ q: "โครงสร้างใบหน้าของนักวิทยาศาสตร์ชื่อดังคนใดที่ถูกนำมาเป็นต้นแบบของมนุษย์ต่างดาวอีที?", a: "อัลเบิร์ต ไอน์สไตน์" },
		{ q: "เครื่องมือก่อสร้างอย่างเลื่อยไฟฟ้าเคยถูกนำมาใช้งานในวงการแพทย์เพื่อจุดประสงค์ใด?", a: "การทำสูติกรรม (ผ่าตัดกระดูกเชิงกรานเพื่อทำคลอด)" },
		{ q: "ปรากฏการณ์การเปลี่ยนแปลงระยะห่างระหว่างดวงจันทร์และโลกดำเนินไปในทิศทางใด?", a: "ดวงจันทร์กำลังเคลื่อนตัวออกห่างจากโลกไปเรื่อยๆ" },
		{ q: "ระยะเวลาที่โลกใช้ในการหมุนรอบตัวเองครบหนึ่งรอบหรือที่เรียกว่าวันดาราคติ มีตัวเลขต่างจากเวลาหน้าปัดนาฬิกาอย่างไร?", a: "มันใช้เวลาน้อยกว่าเวลาเต็มวันปกติ (ประมาณ 23 ชั่วโมง 56 นาที 4 วินาที)" },
		{ q: "หากจำลองการตกลงไปในหลุมลึกที่ขุดทะลุแกนโลกไปยังอีกฝั่ง การเดินทางนี้จะกินระยะเวลาใกล้เคียงกับกิจกรรมใด?", a: "การดูซีรีส์ทางทีวีจบหนึ่งตอน (ประมาณ 42 นาที)" }
    ],
    other: [
		{ q: "Custom Setup / Task 1", q_th: "ตั้งค่าแบบกำหนดเอง 1", a: "Target Answer A", a_th: "คำตอบ A" },
		{ q: "Custom Setup / Task 2", q_th: "ตั้งค่าแบบกำหนดเอง 2", a: "Target Answer B", a_th: "คำตอบ B" }
            ]
};