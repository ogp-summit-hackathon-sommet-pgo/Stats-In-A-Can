// @flow
import * as React from 'react'
import styles from './main.css'
import HeadBar from './head-bar.jsx'

const Channel = () => {
    const name = 'Stats In A Can'
    const text = 'Public Transportation Analysis'
    return (
        <main className={styles.main}>

            <HeadBar name={name} text={text}/>

            <div className={styles.mainContainer}>

                <div className={styles.charts}>
                    <p>
                        some text here
                    </p>
                </div>
            </div>

        </main>
    )
}

export default Channel
