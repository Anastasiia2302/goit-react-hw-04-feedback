import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const buttonsFeedback = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = value => {
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / (good + neutral + bad)) * 100);

  return (
    <>
      <Section name="feedback" title="Please, leave feedback">
        <FeedbackOptions
          options={buttonsFeedback}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section name="statistics" title="Statistics">
        {countTotalFeedback() ? (
         <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : <Notification message="There is no feedback" />}
      </Section>
    </>
  );
};
