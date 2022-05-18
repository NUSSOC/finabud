function WelcomeButton() {
    return(<Button
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  onPress={() => Alert.alert('Button with adjusted color pressed')}
/>);
}