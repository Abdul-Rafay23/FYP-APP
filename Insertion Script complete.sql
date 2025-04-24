-- Insert Users (Admin, Expert, Student)
INSERT INTO Users (password, role, reg_num, section, semester, email, phonenum, firstname, lastname, Level)
VALUES 
('admin123', 1, 'ADM001', 'A', 0, 'admin@example.com', '0001112222', 'Admin', 'User', 0),
('expert123', 2, 'EXP001', 'B', 0, 'expert@example.com', '1112223333', 'Expert', 'User', 3),
('student123', 3, 'STU001', 'C', 4, 'student@example.com', '2223334444', 'Student', 'User', 2);

-- Insert Subjects
INSERT INTO Subjects (code, title) VALUES
('CS101', 'Computer Science Fundamentals');

-- Insert Topics
INSERT INTO Topics (subject_code, title) VALUES
('CS101', 'Basics'),
('CS101', 'Data Structures');

-- Assign Expert to Subject and Topics
INSERT INTO ExpertSubjects (expert_id, subject_code) VALUES (2, 'CS101');
INSERT INTO ExpertTopics (expert_id, topic_id) VALUES (2, 1), (2, 2);

-- Assign Student to Subject
INSERT INTO StudentSubjects (student_id, subject_code) VALUES (3, 'CS101');

-- Insert Questions (2 MCQ, 1 Short Question)
INSERT INTO Questions (subject_code, topic_id, user_id, difficulty, text, type, repeated, yearly_repeated)
VALUES 
('CS101', 1, 2, 1, 'What is the size of int in C?', 1, 0, 0),     -- MCQ
('CS101', 1, 2, 2, 'Explain memory allocation in C.', 2, 0, 0),   -- Short
('CS101', 2, 2, 1, 'Which data structure uses LIFO?', 1, 0, 0);   -- MCQ

-- Insert MCQ Options
INSERT INTO QuestionOptions (question_id, [option], isCorrect)
VALUES 
(1, '2 bytes', 0), (1, '4 bytes', 1), (1, '8 bytes', 0), (1, 'Depends on compiler', 0),
(3, 'Queue', 0), (3, 'Stack', 1), (3, 'Array', 0), (3, 'Tree', 0);

-- Create Task
INSERT INTO Tasks (min_level, max_level, startDate, endDate)
VALUES (1, 3, '2025-04-01', '2025-04-30');

-- Add Questions to Task
INSERT INTO TaskQuestions (task_id, question_id)
VALUES (1, 1), (1, 2), (1, 3);

-- Student submits answers
INSERT INTO SubmittedTasks (task_id, question_id, user_id, answer, submission_date, submission_time)
VALUES 
(1, 1, 3, '4 bytes', '2025-04-10', '10:00:00'),
(1, 2, 3, 'Memory is allocated dynamically using malloc/calloc.', '2025-04-10', '10:05:00'),
(1, 3, 3, 'Stack', '2025-04-10', '10:10:00');

-- Create Team and add Student
INSERT INTO Teams (team_name) VALUES ('Team Alpha');
INSERT INTO TeamMembers (team_id, user_id) VALUES (1, 3);

-- Create Competition
INSERT INTO Competitions (title, year, min_level, max_level, password, rounds, user_id)
VALUES ('Spring Coding Battle', 2025, 1, 3, 'comp123', 4, 2);

-- Create Competition Rounds
INSERT INTO CompetitionRounds (competition_id, round_number, round_type, date)
VALUES 
(1, 1, 1, '2025-05-01'),  -- MCQ
(1, 2, 2, '2025-05-02'),  -- Speed Programming
(1, 3, 3, '2025-05-03'),  -- Shuffle
(1, 4, 4, '2025-05-04');  -- Buzzer

-- Add Round Questions
INSERT INTO CompetitionRoundQuestions (competition_round_id, question_id)
VALUES 
(1, 1), (1, 3);

-- Register Team to Competition
INSERT INTO CompetitionTeams (competition_id, team_id) VALUES (1, 1);

-- Attempt Questions
INSERT INTO CompetitionAttemptedQuestions (competition_id, competition_round_id, question_id, team_id, answer, submission_time)
VALUES 
(1, 1, 1, 1, '4 bytes', '11:00:00'),
(1, 1, 3, 1, 'Stack', '11:05:00');

-- Record Round Results
INSERT INTO RoundResults (competition_round_id, team_id, score, competition_id, isQualified)
VALUES 
(1, 1, 10, 1, 1),
(2, 1, 20, 1, 1);

-- Qualification logic between rounds
INSERT INTO RoundQualificationCriteria (from_round_id, to_round_id, top_teams)
VALUES (1, 2, 3), (2, 3, 2), (3, 4, 1);

-- Winner Board
INSERT INTO WinnerBoard (competition_id, team_id, score) VALUES (1, 1, 40);
