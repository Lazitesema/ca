import { MotionDiv } from "@/components/motion"

const MyComponent = () => {
  return (
    <MotionDiv animate={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
      <h1>Hello, world!</h1>
    </MotionDiv>
  )
}

export default MyComponent

