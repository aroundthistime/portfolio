jest.mock('next/font/google', () => ({
  Playfair_Display: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
  Righteous: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
  Noto_Serif_KR: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));
