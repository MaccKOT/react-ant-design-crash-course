import React from 'react';
import { Table, Typography, Image } from 'antd';

function _Table({ dataSet }) {
  // we need key prop for table items
  const dataSource = dataSet.map((item) => ({
    ...item,
    key: item.id,
  }));

  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'name',
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Album ID',
      dataIndex: 'albumId',
      key: 'album',
      filters: [
        {
          text: 'Album Id: 1',
          value: '1',
        },
        {
          text: 'Album Id: 2',
          value: '2',
        },
        {
          text: 'Album Id: 3',
          value: '3',
        },
      ],
      onFilter: (value, item) => item.albumId == value,
    },
    {
      title: 'Image url',
      dataIndex: 'url',
      key: 'imageUrl',
      render: (text) => <a href={text}>{text}</a>,
    },
    {
      title: 'Image',
      dataIndex: 'thumbnailUrl',
      key: 'image',
      render: (image) => <Image src={image} alt='placeholder' width={150} />,
    },
  ];

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: '5',
          position: ['bottomCenter'],
          showSizeChanger: true,
          pageSizeOptions: [3, 5, 10, 15],
        }}
      />
    </>
  );
}

export default _Table;
