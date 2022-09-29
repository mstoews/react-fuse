import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Root = styled('div')(({ theme }) => ({
  '& > .logo-icon': {
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '& > .badge, & > .logo-text': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  return (
    <Root className="flex items-center">
      <img className="w-24 h-24 logo-icon" src="assets/images/logos/fuse.svg" alt="logo" />
      <Typography className="mx-12 font-medium leading-none logo-text text-16" color="inherit">
        made-to
      </Typography>
    </Root>
  );
}

export default Logo;
