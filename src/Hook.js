import React, { useState, useEffect } from 'react';
function Example() {
  Promise.resolve().then(() => {
    console.log(
      '所有的effect.create都是通过调度器(scheduler)异步(MessageChannel)执行的, 故effect.create函数必然在此之后执行',
    );
  });
  // 第1个hook(useState)
  const [count, setCount] = useState(0);
  // 第2个hook(useEffect)
  useEffect(() => {
    console.log('第1个effect.create dps: []');
    return () => {
      console.log('第1个effect.destory');
    };
  }, []);
  // 第3个hook(useEffect)
  useEffect(() => {
    console.log('effect.create dps: [count]', count);
    return () => {
      console.log('第2个effect.destory dps: [count]', count);
    };
  }, [count]);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => {debugger;setCount(count + 1)}}>Click me</button>
    </>
  );
}
export default Example;