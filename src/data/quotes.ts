export type Category =
  | 'Discipline'
  | 'Courage'
  | 'Grind'
  | 'Focus'
  | 'Resilience'
  | 'Greatness'

export interface Quote {
  id: number
  text: string
  author: string
  category: Category
  /** The "bit of motivation" — one short line that turns the quote into action */
  spark: string
}

export const CATEGORIES: Category[] = [
  'Discipline',
  'Courage',
  'Grind',
  'Focus',
  'Resilience',
  'Greatness',
]

export const QUOTES: Quote[] = [
  // ---- Discipline ----
  { id: 1, text: 'Discipline is choosing what you want most over what you want now.', author: 'Abraham Lincoln (attrib.)', category: 'Discipline', spark: 'Say no to one small temptation today — that\'s a rep for your willpower.' },
  { id: 2, text: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.', author: 'Will Durant', category: 'Discipline', spark: 'Pick one habit and do it at the same time tomorrow. Same time, every day.' },
  { id: 3, text: 'Motivation gets you going, but discipline keeps you growing.', author: 'John C. Maxwell', category: 'Discipline', spark: 'Don\'t wait to feel like it. Set a timer for 10 minutes and start anyway.' },
  { id: 4, text: 'You will never always be motivated. You have to learn to be disciplined.', author: 'Unknown', category: 'Discipline', spark: 'Build the routine on a bad day — that\'s the one that actually counts.' },
  { id: 5, text: 'The pain of discipline weighs ounces. The pain of regret weighs tons.', author: 'Jim Rohn', category: 'Discipline', spark: 'Future you is watching this exact moment. Make them proud.' },
  { id: 6, text: 'Small disciplines repeated with consistency every day lead to great achievements.', author: 'John C. Maxwell', category: 'Discipline', spark: 'Shrink the goal until it\'s impossible to fail — then do it daily.' },
  { id: 7, text: 'Freedom is the reward of discipline.', author: 'Unknown', category: 'Discipline', spark: 'Every hard thing you do now buys you an easier life later.' },
  { id: 8, text: 'He who conquers himself is the mightiest warrior.', author: 'Confucius', category: 'Discipline', spark: 'Win one battle against yourself before the day ends.' },

  // ---- Courage ----
  { id: 9, text: 'Everything you\'ve ever wanted is on the other side of fear.', author: 'George Addair', category: 'Courage', spark: 'Name the thing you\'re avoiding. Take one tiny step toward it right now.' },
  { id: 10, text: 'Courage is not the absence of fear, but the triumph over it.', author: 'Nelson Mandela', category: 'Courage', spark: 'You don\'t need to stop being scared. You just need to move while scared.' },
  { id: 11, text: 'Do one thing every day that scares you.', author: 'Eleanor Roosevelt', category: 'Courage', spark: 'What\'s today\'s scary thing? Send the message. Make the call. Ask.' },
  { id: 12, text: 'Life shrinks or expands in proportion to one\'s courage.', author: 'Anaïs Nin', category: 'Courage', spark: 'Your comfort zone is a cage with an open door. Walk out.' },
  { id: 13, text: 'Fortune favors the bold.', author: 'Virgil', category: 'Courage', spark: 'The opportunity is waiting for someone brave enough. Be that someone.' },
  { id: 14, text: 'You miss 100% of the shots you don\'t take.', author: 'Wayne Gretzky', category: 'Courage', spark: 'A failed attempt teaches you something. A non-attempt teaches you nothing.' },
  { id: 15, text: 'Feel the fear and do it anyway.', author: 'Susan Jeffers', category: 'Courage', spark: 'Fear is just adrenaline without direction. Point it at the goal.' },
  { id: 16, text: 'A ship in harbor is safe, but that is not what ships are built for.', author: 'John A. Shedd', category: 'Courage', spark: 'Stop protecting your potential. Go use it where it can get scratched.' },

  // ---- Grind ----
  { id: 17, text: 'Hard work beats talent when talent doesn\'t work hard.', author: 'Tim Notke', category: 'Grind', spark: 'You can\'t control talent. You can control today\'s effort. Go.' },
  { id: 18, text: 'The dream is free. The hustle is sold separately.', author: 'Unknown', category: 'Grind', spark: 'Everyone wants it. Few will pay for it in sweat. Pay up.' },
  { id: 19, text: 'Nobody cares about your excuses. Nobody pities you for procrastinating. Get to work.', author: 'Unknown', category: 'Grind', spark: 'Close this tab if you must — but only to open the work.' },
  { id: 20, text: 'Sweat is just fat crying.', author: 'Unknown', category: 'Grind', spark: 'However you move today — move harder than yesterday.' },
  { id: 21, text: 'While you\'re sleeping, someone else is working.', author: 'Unknown', category: 'Grind', spark: 'Not to guilt you — to remind you the race is real. Run yours.' },
  { id: 22, text: 'Success is the sum of small efforts, repeated day in and day out.', author: 'Robert Collier', category: 'Grind', spark: 'Today\'s effort feels tiny. Stack it. Watch what a year of stacks becomes.' },
  { id: 23, text: 'Don\'t stop when you\'re tired. Stop when you\'re done.', author: 'Unknown', category: 'Grind', spark: 'Tired is a feeling. Done is a fact. Finish the thing.' },
  { id: 24, text: 'The only place success comes before work is in the dictionary.', author: 'Vidal Sassoon', category: 'Grind', spark: 'There is no shortcut worth taking. There is only the work.' },

  // ---- Focus ----
  { id: 25, text: 'Where focus goes, energy flows.', author: 'Tony Robbins', category: 'Focus', spark: 'Pick ONE thing for the next hour. Kill every other tab. Go deep.' },
  { id: 26, text: 'You will never reach your destination if you stop and throw stones at every dog that barks.', author: 'Winston Churchill', category: 'Focus', spark: 'Let them bark. Keep walking.' },
  { id: 27, text: 'The successful warrior is the average man, with laser-like focus.', author: 'Bruce Lee', category: 'Focus', spark: 'You don\'t need to be special. You need to be undistracted.' },
  { id: 28, text: 'Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.', author: 'Zig Ziglar', category: 'Focus', spark: 'Write down the one outcome that matters today. Aim everything at it.' },
  { id: 29, text: 'Concentrate all your thoughts upon the work in hand. The sun\'s rays do not burn until brought to a focus.', author: 'Alexander Graham Bell', category: 'Focus', spark: 'Scattered light warms nothing. Focused light cuts steel.' },
  { id: 30, text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci', category: 'Focus', spark: 'Delete one commitment this week. Guard your attention like money.' },
  { id: 31, text: 'Starve your distractions. Feed your focus.', author: 'Unknown', category: 'Focus', spark: 'Phone in another room. One task. Twenty-five minutes. Now.' },
  { id: 32, text: 'It is during our darkest moments that we must focus to see the light.', author: 'Aristotle Onassis', category: 'Focus', spark: 'The light is still there — focus is how you find it.' },

  // ---- Resilience ----
  { id: 33, text: 'Fall seven times, stand up eight.', author: 'Japanese Proverb', category: 'Resilience', spark: 'You\'ve survived 100% of your worst days so far. That\'s a perfect record.' },
  { id: 34, text: 'Rock bottom became the solid foundation on which I rebuilt my life.', author: 'J.K. Rowling', category: 'Resilience', spark: 'If you\'re at the bottom, good news: there\'s nowhere to go but up.' },
  { id: 35, text: 'It\'s not whether you get knocked down; it\'s whether you get up.', author: 'Vince Lombardi', category: 'Resilience', spark: 'Getting up once more than you fall is the entire formula.' },
  { id: 36, text: 'The harder the conflict, the more glorious the triumph.', author: 'Thomas Paine', category: 'Resilience', spark: 'This struggle is making your victory story worth telling.' },
  { id: 37, text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.', author: 'Ralph Waldo Emerson', category: 'Resilience', spark: 'Your track record for surviving hard things is undefeated.' },
  { id: 38, text: 'Smooth seas do not make skillful sailors.', author: 'African Proverb', category: 'Resilience', spark: 'The storm is the training. You\'re becoming dangerous in the best way.' },
  { id: 39, text: 'Pain is temporary. Quitting lasts forever.', author: 'Lance Armstrong', category: 'Resilience', spark: 'Rest if you must. Cry if you must. Just don\'t quit.' },
  { id: 40, text: 'A diamond is a chunk of coal that did well under pressure.', author: 'Henry Kissinger', category: 'Resilience', spark: 'The pressure you feel right now? That\'s the process working.' },

  // ---- Greatness ----
  { id: 41, text: 'Whether you think you can or you think you can\'t, you\'re right.', author: 'Henry Ford', category: 'Greatness', spark: 'Your belief is the ceiling. Raise it.' },
  { id: 42, text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb', category: 'Greatness', spark: 'Stop mourning the late start. Start. That\'s the whole move.' },
  { id: 43, text: 'Don\'t watch the clock; do what it does. Keep going.', author: 'Sam Levenson', category: 'Greatness', spark: 'Time passes either way. Make sure you\'re moving while it does.' },
  { id: 44, text: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt', category: 'Greatness', spark: 'Doubt is a thought, not a fact. Act like the capable version of you.' },
  { id: 45, text: 'Champions keep playing until they get it right.', author: 'Billie Jean King', category: 'Greatness', spark: 'Repetition is the price of mastery. Pay it gladly.' },
  { id: 46, text: 'Go the extra mile. It\'s never crowded.', author: 'Wayne Dyer', category: 'Greatness', spark: 'Do one thing today that nobody asked for and nobody expected.' },
  { id: 47, text: 'If you\'re going through hell, keep going.', author: 'Winston Churchill', category: 'Greatness', spark: 'The exit is on the far side. Stopping just keeps you in it.' },
  { id: 48, text: 'Act as if what you do makes a difference. It does.', author: 'William James', category: 'Greatness', spark: 'Your effort is never wasted — it\'s either progress or practice.' },
]
