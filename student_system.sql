
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `student_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(100) NOT NULL,
  `code` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `grade` varchar(50) NOT NULL,
  `hours` int(50) NOT NULL,
  `department_id` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `code`, `name`, `grade`, `hours`, `department_id`) VALUES
(1, 'CS101', 'Introduction to Computer Science', '', 3, 1),
(2, 'CS102', 'Data Structures', '', 4, 1),
(3, 'CS103', 'Algorithms', '', 3, 1),
(4, 'CS104', 'Operating Systems', '', 4, 1),
(5, 'CS105', 'Database Systems', '', 3, 1),
(6, 'CS106', 'Software Engineering', '', 3, 1),
(7, 'CS107', 'Computer Networks', '', 4, 1),
(8, 'CS108', 'Web Development', '', 3, 1),
(9, 'CS109', 'Artificial Intelligence', '', 3, 1),
(10, 'CS110', 'Machine Learning', '', 3, 1),
(11, 'CH101', 'General Chemistry', '', 3, 2),
(12, 'CH102', 'Organic Chemistry', '', 4, 2),
(13, 'CH103', 'Inorganic Chemistry', '', 3, 2),
(14, 'CH104', 'Physical Chemistry', '', 4, 2),
(15, 'CH105', 'Analytical Chemistry', '', 3, 2),
(16, 'CH106', 'Biochemistry', '', 3, 2),
(17, 'CH107', 'Chemical Engineering', '', 4, 2),
(18, 'CH108', 'Environmental Chemistry', '', 3, 2),
(19, 'CH109', 'Industrial Chemistry', '', 3, 2),
(20, 'CH110', 'Medicinal Chemistry', '', 3, 2),
(21, 'CS201', 'Advanced Programming', '', 3, 1),
(22, 'CS202', 'Computer Graphics', '', 3, 1),
(23, 'CS203', 'Human-Computer Interaction', '', 4, 1),
(24, 'CS204', 'Cybersecurity', '', 3, 1),
(25, 'CS205', 'Mobile Development', '', 3, 1),
(26, 'CH201', 'Spectroscopy', '', 3, 2),
(27, 'CH202', 'Chemical Kinetics', '', 4, 2),
(28, 'CH203', 'Quantum Chemistry', '', 3, 2),
(29, 'CH204', 'Theoretical Chemistry', '', 3, 2),
(30, '', '', '', 0, 2),
(31, 'CS301', 'Cloud Computing', '', 3, 1),
(32, 'CS302', 'Big Data', '', 4, 1),
(33, 'CS303', 'Computer Vision', '', 3, 1),
(34, 'CS304', 'Natural Language Processing', '', 4, 1),
(35, '', '', '', 0, 1),
(36, '', '', '', 0, 2),
(37, '', '', '', 0, 2),
(38, 'CH303', 'Coordination Chemistry', '', 4, 2),
(39, 'CH304', 'Chemical Engineering Thermodynamics', '', 3, 2),
(40, 'CH305', 'Chemistry of Materials', '', 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`) VALUES
(1, 'Computer Science'),
(2, 'Chemistry');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `department_id` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `department_id`) VALUES
(1, 'hazem', '$2y$10$yM/dE8aXUoX954oNIzoMqOC2UUy4q5kZRiQ5tdmbEzCXf3ndhuk26', 1),
(38, 'Ahmed', '$2y$10$3e6N4aRY.0RcUrFHUY7uQeRTufBvM1Y92DQefpTmLNqzixQZfoNtm', 1),
(39, 'Mohamed', '$2y$10$vcjubjbwjjQLBgN1GymIlO376I0d8/1/g0j.FqZZSM5z8ei98leyS', 2),
(40, 'amir', '$2y$10$Vd4Y523/Xdd/RRe/iLrlnOEOFMEaheD3K8S/JSKnS7bs2L7t0hykG', 1),
(41, 'aaa', '$2y$10$FjdNSIwz0.l0svXw0xzs3OafPn7mtDbrXeXMP6Ia6ht49SJXiWa5C', 2),
(42, 'aa', '$2y$10$zi9eG5aI1dSPQrKI68XdwuqBjv/ylV.9lu2cCLKgg117P.OtS1Pkm', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_courses`
--

CREATE TABLE `user_courses` (
  `id` int(255) NOT NULL,
  `Code` varchar(20) NOT NULL,
  `Subject` varchar(255) NOT NULL,
  `Grade` varchar(255) NOT NULL,
  `Hours` int(255) NOT NULL,
  `user_id` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user_courses`
--

INSERT INTO `user_courses` (`id`, `Code`, `Subject`, `Grade`, `Hours`, `user_id`) VALUES
(47, 'CS104', 'Operating Systems', 'C', 4, 1),
(48, 'CS103', 'Algorithms', 'D', 3, 1),
(49, 'CS101', 'Introduction to Computer Science', 'A', 3, 1),
(50, 'CH102', 'Organic Chemistry', 'B', 4, 42),
(51, 'CS102', 'Data Structures', 'B', 4, 1),
(52, 'CS103', 'Algorithms', 'B', 3, 1),
(53, 'CS102', 'Data Structures', 'B', 4, 1),
(54, 'CS104', 'Operating Systems', 'C', 4, 1),
(55, 'CS104', 'Operating Systems', 'F', 4, 1),
(56, 'CS301', 'Cloud Computing', 'F', 3, 1),
(57, 'CS304', 'Natural Language Processing', 'C', 4, 1),
(58, 'CS101', 'Introduction to Computer Science', 'C', 3, 1),
(59, 'CS103', 'Algorithms', 'C', 3, 1),
(60, 'CS102', 'Data Structures', 'D', 4, 1),
(61, 'CS101', 'Introduction to Computer Science', 'B', 3, 1),
(62, 'CS104', 'Operating Systems', 'B', 4, 1),
(63, 'CS304', 'Natural Language Processing', 'C', 4, 1),
(64, 'CS101', 'Introduction to Computer Science', 'B', 3, 1),
(65, 'CS102', 'Data Structures', 'C', 4, 1),
(66, 'CS109', 'Artificial Intelligence', 'F', 3, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `user_courses`
--
ALTER TABLE `user_courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `user_courses`
--
ALTER TABLE `user_courses`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`);
COMMIT;


