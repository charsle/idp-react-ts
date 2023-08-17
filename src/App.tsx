
import './App.css'
import router from '@/router'
import { ConfigProvider,ThemeConfig } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import {
  RouterProvider,
} from "react-router-dom";


function App() {
  const config: ThemeConfig = {
    token: {
      colorPrimary: '#1890ff',
    },
  };
  return (
    <ConfigProvider theme={config} locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
