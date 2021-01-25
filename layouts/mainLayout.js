import React from 'react'
import styles from '../styles/MainLayout.module.css'
export default function MainLayout (props) {
  return (
    <div className={styles.pageContainer}>
      {props.children}
    </div>
  )
}