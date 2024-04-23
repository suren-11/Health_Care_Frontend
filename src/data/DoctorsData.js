const doctorDetails = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiology",
    experience: 10,
    university: "Harvard Medical School",
    icon: require('../images/male1.jpg'), // Make sure you have this image in your project
    aboutMe: `I am a dedicated cardiologist with over a decade of experience in various healthcare settings. My commitment to patient care has been the driving force of my practice. 
    \nThroughout my career, I've been fortunate to work alongside some of the most renowned medical professionals in the field, which has significantly enriched my expertise and approach to treatment. I firmly believe in a holistic approach to cardiology that not only addresses the immediate cardiovascular concerns but also the overall well-being of my patients.
    \nMy mission is to empower my patients with knowledge and support them through their journey to better heart health. My approach is always tailored to each individual, ensuring they receive the most effective care possible.`,
    myApproach: `My approach to cardiology is patient-centric, focusing on prevention, early detection, and employing state-of-the-art intervention techniques. I prioritize staying up-to-date with the latest research and advancements in cardiovascular medicine to ensure my patients benefit from cutting-edge care.
    \nIn the treatment of cardiovascular diseases, I employ a combination of innovative interventional procedures, comprehensive lifestyle counseling, and medication management. Each treatment plan is carefully curated to fit the patient's unique health profile and needs.
    \nI advocate for a collaborative approach, where patients are encouraged to be active participants in their healthcare decisions. This includes engaging discussions about treatment options, continuous education about heart health, and proactive measures to prevent disease progression.`,
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: {
      Monday: ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
      Wednesday: ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
      Friday: ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"]
    }
  },

  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Neurology",
    experience: 8,
    university: "Johns Hopkins University School of Medicine",
    icon: require('../images/male2.jpg'),
    aboutMe: "I am a dedicated Neurologist with 8 years of experience working at John Hopkins University School of Medicine. My career has been driven by a deep commitment to improve patient outcomes in neurological care. Over the years, I have honed my skills in both acute neurological emergencies and the management of chronic conditions. \n\nI believe in a holistic approach to patient care, taking into account the wide array of psychological and physical factors that can affect neurological health. I’ve been involved in groundbreaking research on neurodegenerative diseases, contributing to advancements in treatment protocols that are now widely adopted in clinical practice.",
    myApproach: "My approach to treating neurological disorders is rooted in a multidisciplinary strategy that encompasses the latest research and treatment techniques. I work closely with a team of experts across various medical fields to ensure that my patients receive the most comprehensive care possible. \n\nI stay abreast of the latest developments in neurology to bring innovative therapies to my practice. My philosophy is to empower patients with the knowledge and resources they need to navigate their treatment journey. I am committed to creating personalized treatment plans that align with each patient's unique health needs and lifestyle.",
    availableDays: ["Tuesday", "Thursday"],
    timeSlots: {
     Tuesday: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"],
     Thursday: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"]
    }
  }
  ,
  {
    id: 3,
    name: "Dr. Richard Roe",
    specialty: "Orthopedics",
    experience: 12,
    university: "Stanford University School of Medicine",
    icon: require('../images/male3.jpg'),
    aboutMe: "As an Orthopedic Surgeon with over a decade of experience, I specialize in treating sports injuries and conducting joint replacements. My journey began at Stanford University School of Medicine, where I developed a profound understanding of musculoskeletal health. Throughout my career, I have worked with athletes from various disciplines, understanding the physical demands and stressors of high-performance sports. \n\nI am adept in the latest minimally invasive surgical procedures that expedite healing and reduce recovery time. My practice is supported by a deep commitment to patient education, ensuring that every individual I treat has a thorough understanding of their condition and the surgical process.",
    myApproach: "My treatment philosophy is centered on a combination of state-of-the-art surgical techniques and a tailored rehabilitation plan to ensure the best possible outcomes for my patients. I believe that successful orthopedic care extends far beyond the operating room—it involves a comprehensive, coordinated effort with physical therapists, pain management specialists, and the patients themselves. \n\nI emphasize the importance of a personalized rehabilitation plan that is aligned with each patient’s unique circumstances and goals. By integrating advanced surgical techniques with customized rehab plans, I strive to return my patients to their desired level of activity and improve their overall quality of life.",
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: {
     Monday: ["8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM"],
     Wednesday: ["8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM"],
     Friday: ["8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM",]
    }
  }
  ,
  {
    id: 4,
    name: "Dr. Emily Stone",
    specialty: "Pediatrics",
    experience: 7,
    university: "University of California, San Francisco, School of Medicine",
    icon: require('../images/female1.jpg'),
    aboutMe: "As a Pediatrician with a passionate dedication to child health, I bring seven years of rich experience garnered at the University of California, San Francisco, School of Medicine. My commitment to pediatric care is rooted in a deep-seated compassion for children and their well-being. I pride myself on creating a warm and welcoming environment where children and their families can feel secure and understood. My experience spans neonatal care to adolescent medicine, providing comprehensive support for every stage of childhood development.\n\nThroughout my practice, I have championed preventive medicine, ensuring that children get the best start in life. By focusing on early intervention strategies, I aim to lay the foundation for a lifetime of good health. I actively engage in continuing education and collaborate with a network of healthcare professionals to stay at the forefront of pediatric healthcare innovations.",
    myApproach: "The cornerstone of my medical practice is a family-centered approach, recognizing that a child's health is intrinsically linked to their home environment and family life. I collaborate closely with parents and caregivers to craft individualized care plans that address each child's unique needs. My approach is holistic, considering not just the physical but also the emotional and social aspects of health.\n\nI place a strong emphasis on education, empowering families with the knowledge to make informed decisions about their child’s healthcare. My goal is to work as a team with parents to navigate their child's health journey, from managing acute illnesses to guiding them through developmental milestones. Together, we work towards achieving the best possible outcomes for the children under my care, ensuring they grow up healthy, happy, and resilient.",
    availableDays: ["Monday", "Tuesday", "Thursday"],
    timeSlots: {
     Monday: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"],
     Tuesday: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"],
     Thursday: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"]
    }
  }
  ,
  {
    id: 5,
    name: "Dr. Alex Rivera",
    specialty: "Dermatology",
    experience: 9,
    university: "University of Michigan Medical School",
    icon: require('../images/female2.jpg'),
    aboutMe: "As an expert in skin health with 9 years of experience, I am deeply invested in treating a diverse range of dermatological conditions. At the University of Michigan Medical School, my training encompassed both medical and cosmetic dermatology, equipping me with a unique perspective on skin health. I am particularly focused on early detection and treatment of skin cancer, as well as managing chronic skin conditions such as psoriasis and eczema. My practice also includes advanced treatments for skin rejuvenation and addressing cosmetic concerns, always with a focus on evidence-based care.\n\nMy dedication extends to patient education, ensuring that my patients understand their conditions and the importance of skin protection. I strive to foster an environment where open communication is the norm, allowing for collaborative decision-making and personalized treatment plans that reflect the needs and values of my patients.",
    myApproach: "I believe that patient care should be as individual as the skin conditions I treat. My comprehensive approach is underpinned by the latest research in dermatological science, combined with state-of-the-art treatments. This includes a keen emphasis on preventative care, where I advise on daily skin care routines, sun protection, and lifestyle choices that impact skin health. When intervention is necessary, I offer a range of treatments from topical medications to surgical procedures, always tailored to the specific needs and comfort of my patients.\n\nContinuous professional development is a cornerstone of my practice. I regularly attend conferences and contribute to dermatological research to ensure that my patients benefit from the most current and effective treatments available. My ultimate goal is to achieve optimal skin health for my patients, enhancing both their well-being and self-confidence.",
    availableDays: ["Wednesday", "Friday"],
    timeSlots: {
     Wednesday: ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM"],
     Friday: ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM"]
    }
  },
  {
    id: 6,
    name: "Dr. Lisa Chang",
    specialty: "Gastroenterology",
    experience: 11,
    university: "Columbia University College of Physicians and Surgeons",
    icon: require('../images/female3.jpg'),
    aboutMe: "With over a decade of specialized experience in gastroenterology, I am committed to advancing the field of digestive health. My educational journey at Columbia University College of Physicians and Surgeons laid the foundation for a career dedicated to helping patients overcome gastrointestinal challenges. My clinical expertise spans a wide spectrum, from inflammatory bowel diseases to complex hepatobiliary disorders. I am particularly focused on the early detection and management of gastrointestinal cancers, advocating for screening and prevention as critical components of care.\n\nI have a strong commitment to patient education, believing that knowledge empowers patients to make informed decisions regarding their health. By providing clear explanations and resources, I ensure that my patients are active participants in their care, fostering a partnership that is based on trust and mutual respect.",
    myApproach: "My patient-focused approach centers on preventative care and the use of minimally invasive treatments to manage and resolve gastrointestinal issues. I work diligently to stay abreast of the latest advancements in endoscopic techniques and non-surgical interventions that can provide relief with minimal discomfort and recovery time. This includes a significant emphasis on dietary and lifestyle modifications as part of a comprehensive treatment plan.\n\nRecognizing that each patient's experience with gastrointestinal disease is unique, I tailor my approach to their specific circumstances. Collaborating with a multidisciplinary team, I design individualized care plans that not only address the present condition but also aim to prevent future complications. My approach is one of compassion and meticulous care, aiming to improve my patients' quality of life through every stage of treatment.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: {
     Tuesday: ["8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
     Thursday: ["8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
     Saturday: ["8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM"]
    }
  },
  {
    id: 7,
    name: "Dr. Jany Aredoson",
    specialty: "Psychiatry",
    experience: 10,
    university: "Yale School of Medicine",
    icon: require('../images/female4.jpg'),
    aboutMe: "In my 10 years of psychiatric practice, my goal has always been to provide empathetic and comprehensive care tailored to the mental health needs of my patients. My training at Yale School of Medicine has ingrained in me a strong foundation in both the biological and psychological aspects of mental health. My experience covers a broad spectrum of psychiatric disorders, from depression and anxiety to more complex conditions like bipolar disorder and schizophrenia. I have a particular interest in the interplay between mental health and societal factors and strive to address these in my therapeutic practices.\n\nI am an advocate for mental health awareness and work to destigmatize mental health conditions. My practice is based on the principle that mental health care should be accessible and inclusive, providing support and treatment to individuals from all walks of life.",
    myApproach: "My holistic approach to psychiatry integrates medication management with various forms of psychotherapy. I believe that understanding the individual's story is crucial to effective treatment. Therefore, I place a strong emphasis on building a therapeutic alliance with my patients, creating a safe and trusting environment where they can discuss their concerns freely. My approach is collaborative, involving patients in their treatment plans and often working closely with other health professionals to provide multidimensional care.\n\nContinued learning is important to me, and I stay informed about the latest developments in psychiatric research. This allows me to offer innovative treatments and therapies that are backed by solid evidence. I am committed to helping my patients navigate the complexities of their conditions, supporting them to achieve mental wellness and",
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: {
     Monday: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"],
     Wednesday: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"],
     Friday: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"]
    }
  },
  {
    id: 8,
    name: "Dr. Sarah Bennett",
    specialty: "Endocrinology",
    experience: 8,
    university: "Duke University School of Medicine",
    icon: require('../images/female5.jpg'),
    aboutMe: "In my role as an endocrinologist with 8 years of experience, I've developed a deep commitment to assisting patients with hormonal imbalances and complex endocrine disorders. Educated at Duke University School of Medicine, I’ve had the opportunity to work with leading experts in the field of endocrine health. My clinical focus includes diabetes management, thyroid disorders, and adrenal and pituitary diseases. I am especially interested in how endocrine disruptors in the environment affect our health and am actively involved in research studying these effects.\n\nPatient advocacy is at the core of my practice. I aim to equip my patients with the tools and knowledge they need to manage their conditions effectively. I've also been involved in community programs to raise awareness about endocrine health and actively support patient-led initiatives.",
    myApproach: "My approach to endocrine disorders is personalized, taking into account each patient’s unique health profile. I combine the latest research findings with innovative therapies to offer care plans tailored specifically to my patients. This often involves a careful balance of medication, lifestyle changes, and, in some cases, surgery. I believe in the power of education and ensure that my patients understand their condition and treatment options thoroughly.\n\nI also maintain a collaborative practice, working closely with primary care physicians, nutritionists, and other specialists to provide a cohesive treatment experience. Together, we address the challenges of endocrine disorders with a compassionate and comprehensive strategy, focused on optimizing health and well-being for every patient under my care.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: {
     Tuesday: ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
     Thursday: ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
     Saturday: ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"]
    }
  },
  {
    id: 9,
    name: "Dr. Nicholas Reid",
    specialty: "Ophthalmology",
    experience: 12,
    university: "University of Pennsylvania Perelman School of Medicine",
    icon: require('../images/male4.jpg'),
    aboutMe: "With 12 years of dedicated experience in ophthalmology, my career has been focused on preserving and enhancing the vision of my patients. At the University of Pennsylvania Perelman School of Medicine, I received comprehensive training that has equipped me to tackle a wide range of eye health issues. I have a particular interest in the prevention and treatment of glaucoma and age-related macular degeneration, as well as in the advancement of cataract surgery techniques. My practice is also actively involved in community outreach, providing vision screenings and eye health education to under-served populations.\n\nMy passion for ophthalmology extends beyond clinical practice into research, where I have been part of teams studying the genetic factors of eye diseases. This research is integral to developing new treatment modalities and understanding the complexities of vision health. I am committed to providing empathetic and cutting-edge care to all of my patients, aiming to improve not just their sight, but their overall quality of life.",
    myApproach: "My approach to ophthalmic care is comprehensive, beginning with a thorough assessment using advanced diagnostic techniques to ensure accurate diagnoses. I believe that patient education is vital, and I take the time to discuss and explain conditions and treatment options in detail, empowering my patients to make informed decisions. I'm skilled in the latest surgical procedures and technological advancements in eye care, and I personalize treatment plans to suit each patient's specific needs and lifestyle.\n\nContinued innovation is central to my practice. I actively keep up-to-date with the latest findings and techniques in eye care, and I contribute to peer-reviewed research. By combining a meticulous attention to detail with a compassionate approach, I strive to provide exceptional care that leads to the best possible outcomes for my patients' vision and overall well-being.",
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: {
     Monday: ["8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
     Wednesday: ["8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
     Friday: ["8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM"]
    }
  },

  // Add more doctors as needed
];

export default doctorDetails;
