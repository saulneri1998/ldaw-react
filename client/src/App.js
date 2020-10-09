import React from 'react';
import { CSSReset, Stack, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from 'recoil';
import Header from './Components/Header'
import Tasks from './Components/Tasks'


function App() {
  return (
    <ThemeProvider>
      <RecoilRoot>
        <CSSReset />
        <Stack p={10} spacing={200}>
          <Header />
          <Tasks />
        </Stack>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
