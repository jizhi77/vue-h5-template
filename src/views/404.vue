<template>
  <main>
    <span>404</span>
    <p>The requested path could not be found</p>
  </main>
</template>

<style scoped lang="less">
main,
aside,
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.main {
  height: 100%;
}

.section {
  span {
    font-size: 24px;
    font-weight: 500;
    display: block;
    border-bottom: 1px solid #eaeaea;
    text-align: center;
    padding-bottom: 20px;
    width: 100px;

    & + p {
      margin: 20px 0 0 0;
    }
  }
}
</style>
