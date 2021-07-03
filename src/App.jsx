import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Typography, Divider, Layout } from 'antd';
import { Spin, Space } from 'antd';
import Header from './components/Header';
import _Table from './components/Table';
//import { dataset } from './data.js';

function App() {
  const [count, setCount] = useState(0);

  const { Title, Paragraph, Link } = Typography;
  const { Footer, Content } = Layout;

  let [dataSet, setDataset] = useState(null);
  let [tableLoading, setTableloading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => {
        setDataset(data);
        setTableloading(false);
      });
  }, []);

  return (
    <>
      <Layout>
        <Header />
        <Content style={{ padding: '2rem' }}>
          <Typography>
            <Paragraph>
              <Title>Hello Vite + React + AntDesign!</Title>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              inventore, incidunt possimus iure ut consequuntur veniam soluta
              nemo alias ex temporibus mollitia quis debitis expedita non eos,
              molestiae reprehenderit! Corrupti.
            </Paragraph>
            {tableLoading ? (
              <Space size='large'>
                <Spin />
              </Space>
            ) : (
              <_Table dataSet={dataSet} />
            )}

            <Divider />
            <p>
              <Button
                type='primary'
                onClick={() => setCount((count) => count + 1)}>
                count is: {count}
              </Button>
            </p>
          </Typography>
        </Content>
        <Footer>
          <Link href='https://ant.design/'>Learn about Ant Design</Link>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
