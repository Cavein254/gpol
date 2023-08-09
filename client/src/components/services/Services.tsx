import { Box } from '@mui/material';
import Item from './Item';
import { services } from './data';
import './styles.scss';

export default function Services() {
  const items = services.map((service) => (
    <Item service={service} key={service.id} />
  ));
  return <Box className="services-wrapper">{items}</Box>;
}
