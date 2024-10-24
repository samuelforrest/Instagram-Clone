import { Link } from 'expo-router';
import { Redirect } from 'expo-router';

export default function Home() {
  return <Redirect href="/(tabs)" />;
}