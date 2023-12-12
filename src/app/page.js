import { Container, ListItem } from '@/components';
import { MdLocationOn } from 'react-icons/md';

export default function Home() {
  return (
    <main>
      <Container>
        <ListItem
          title="90919 Madie run Apt. 790"
          icon={<MdLocationOn size={22} />}
        />
      </Container>
    </main>
  );
}
