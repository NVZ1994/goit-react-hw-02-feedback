import React, { Component } from 'react'
import Section from './Section/Section'
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import { Container, Wrapper } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  clickHandler = (event) => {
    const key = event.target.id
    this.setState((prevState) => ({
      [key]: prevState[key] +1
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total
  }
  
  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback()
    const { good } = this.state
    return total > 0 ? Math.round(good/total*100):0
  }

  render() {
    const { good, neutral, bad } = this.state
    
    return (<Container>
    <Wrapper>
    <Section title='Please leave feedback' children={
      <FeedbackOptions options={this.state}
        onLeaveFeedback={this.clickHandler}/>
      } />
    <Section title='Statistics'
      children={
        this.countTotalFeedback() > 0 &&
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positive={this.countPositiveFeedbackPercentage()} />
    }></Section>
        </Wrapper>
    </Container>
    );
    }
};

export {App}