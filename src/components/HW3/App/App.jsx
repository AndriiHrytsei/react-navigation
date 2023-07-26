import { useState } from 'react';
import Stats from '../Stats/Stats';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  function countTotalFeedback() {
    return good + bad + neutral;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((100 * good) / countTotalFeedback());
  }

  const feedbackOptionsArr = [
    {
      id: 1,
      name: 'good',
      action: () => setGood(good + 1),
    },
    {
      id: 2,
      name: 'neutral',
      action: () => setNeutral(neutral + 1),
    },
    {
      id: 3,
      name: 'bad',
      action: () => setBad(bad + 1),
    },
  ];

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={feedbackOptionsArr} />
      {!countTotalFeedback() ? (
        <Notification message="There is no feedback" />
      ) : (
        <Stats
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
}
