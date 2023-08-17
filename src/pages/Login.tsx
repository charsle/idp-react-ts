import { Button,Pagination } from 'antd'

const Login = () => {
  return (
    <div>
         <Pagination defaultCurrent={1} total={50} showSizeChanger />
        <Button type='primary' size='middle'>Button</Button>
    </div>
  )
}

export default Login
