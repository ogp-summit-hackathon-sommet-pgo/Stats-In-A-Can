// @flow
import * as React from 'react'
import styles from './main.css'
import HeadBar from './head-bar.jsx'
import {Table} from 'reactstrap'

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
                <div className={styles.can}>
                    <div className={styles.canBody}>
                        <div className={styles.canLayout}></div>
                        <div className={styles.canTop}></div>
                        <div className={styles.canButt}></div>
                        <div className={styles.canText}>
                            <span className={styles.canTitle}>Ottawa</span><br/>
                            <span className={styles.canRating}>95</span><br/>
                            <span className={styles.canContent}>Text</span><br/>
                            <span>Text</span><br/>
                            <span>Text</span><br/>
                            <span>Text</span><br/>
                            <span>Text</span><br/>
                        </div>
                        {/*<div className={styles.canRating}>95</div>*/}
                    </div>
                    <div className={styles.canCommentary}>Lorem ipsum dolor sit amet, at modo lorem rationibus eum. Eos
                        at evertitur urbanitas, ex mea platonem adipiscing referrentur. Cu nec porro facilis, an quodsi
                        splendide vis. Mea choro doming reprehendunt in, eos in aeterno iudicabit. Vim fuisset blandit
                        interesset ex, nam cibo iisque conceptam in. His vitae evertitur ei, ut sit enim consectetuer.
                        Pro no habeo feugiat voluptaria.

                        Oratio perpetua at nam, has audiam commune repudiare ad, nec eu ornatus constituto. Nemore
                        temporibus an vix, verear voluptaria disputando cu est. Est lorem neglegentur ne. Cu adhuc elitr
                        eirmod vim, omnes fabellas no mei.

                        Pertinax reprehendunt vel id, munere offendit per no. Ei usu veri copiosae tractatos. An cum
                        commodo feugiat albucius, tota dicta nostrum cum in. Ea solum persecuti vituperata mei. Id
                        verterem constituto eloquentiam nam, eam ex nisl possim, vim ex sonet noster voluptatum.
                        Noluisse pertinacia ne quo.

                        Ut nonumy disputando duo, nihil eruditi eu mel. Scripta adipisci mea te, quo regione
                        reprehendunt te, est te diam nullam. Cu usu dico harum denique. Modus quaestio vix at, te veri
                        discere labores sed, augue quando aperiam ad cum.

                        Eos ei alterum platonem indoctum, dicant verterem argumentum nam no, sed no imperdiet
                        quaerendum. Sit omittam erroribus at, in quo facer fuisset omittantur, et his suscipit
                        adipiscing mediocritatem. Nemore legimus moderatius te vix. Feugiat erroribus adolescens id qui,
                        latine diceret invenire eam te, odio fabulas vel at. Sit assueverit concludaturque ex, sit
                        docendi mandamus reprehendunt id, id sed nibh malis. Dicit reprimique at vim, ad cum solet
                        blandit intellegam.
                    </div>
                </div>
                <div className={styles.can}>
                    <div className={styles.canBody}>
                        <div className={styles.canLayout}></div>
                        <div className={styles.canTop}></div>
                        <div className={styles.canButt}></div>
                        <div className={styles.canLable}>
                            <div className={styles.tableRight}>
                                <Table borderless responsive className={styles.gameName}>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Game</th>
                                        <th>Stream Count</th>
                                        <th>Genre</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*{tr}*/}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    {/*<div className={styles.canRating}>95</div>*/}

                    <div className={styles.canCommentary}>Lorem ipsum dolor sit amet, at modo lorem rationibus eum. Eos
                        at evertitur urbanitas, ex mea platonem adipiscing referrentur. Cu nec porro facilis, an quodsi
                        splendide vis. Mea choro doming reprehendunt in, eos in aeterno iudicabit. Vim fuisset blandit
                        interesset ex, nam cibo iisque conceptam in. His vitae evertitur ei, ut sit enim consectetuer.
                        Pro no habeo feugiat voluptaria.

                        Oratio perpetua at nam, has audiam commune repudiare ad, nec eu ornatus constituto. Nemore
                        temporibus an vix, verear voluptaria disputando cu est. Est lorem neglegentur ne. Cu adhuc elitr
                        eirmod vim, omnes fabellas no mei.

                        Pertinax reprehendunt vel id, munere offendit per no. Ei usu veri copiosae tractatos. An cum
                        commodo feugiat albucius, tota dicta nostrum cum in. Ea solum persecuti vituperata mei. Id
                        verterem constituto eloquentiam nam, eam ex nisl possim, vim ex sonet noster voluptatum.
                        Noluisse pertinacia ne quo.

                        Ut nonumy disputando duo, nihil eruditi eu mel. Scripta adipisci mea te, quo regione
                        reprehendunt te, est te diam nullam. Cu usu dico harum denique. Modus quaestio vix at, te veri
                        discere labores sed, augue quando aperiam ad cum.

                        Eos ei alterum platonem indoctum, dicant verterem argumentum nam no, sed no imperdiet
                        quaerendum. Sit omittam erroribus at, in quo facer fuisset omittantur, et his suscipit
                        adipiscing mediocritatem. Nemore legimus moderatius te vix. Feugiat erroribus adolescens id qui,
                        latine diceret invenire eam te, odio fabulas vel at. Sit assueverit concludaturque ex, sit
                        docendi mandamus reprehendunt id, id sed nibh malis. Dicit reprimique at vim, ad cum solet
                        blandit intellegam.
                    </div>
                </div>
                <div>Some words</div>
            </div>

        </main>
    )
}

export default Channel
