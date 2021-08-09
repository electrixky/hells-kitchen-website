import styles from './Heading.module.scss'
import React, {FC} from 'react'

interface IHeading {
	children: React.ReactChild | React.ReactNode,
}

const Heading: FC<IHeading> = ({children}) => {
	return <p className = {styles.heading}>{children}</p>
}

export default Heading