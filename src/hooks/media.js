import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';

export const media = {
  'xs': 0, 'sm': 1, 'md': 2, 'lg': 3, 'xl': 4
}

function useMedia() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.only(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

export function useMediaOnly(size) {
  const width = useMedia();
  return size => media[width] === size;
}

export function useMediaNot(size) {
  const width = useMedia();
  return size => media[width] !== size;
}

export function useMediaUp(size) {
  const width = useMedia();
  return size => media[width] >= size;
}

export function useMediaDown(size) {
  const width = useMedia();
  return size => media[width] <= size;
}

export function useMediaLargerThan(size) {
  const width = useMedia();
  return size => media[width] > size;
}

export function useMediaSmallerThan(size) {
  const width = useMedia();
  return size => media[width] < size;
}
