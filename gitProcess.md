# Git Process
Við ætlum að fylgja ákveðinni aðferð sem lýst er þá þessari [síðu](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

Okkar lýsingu á þessu má finna í [þessu skjali](https://wiki.advania.is/pages/viewpage.action?pageId=13439009). 

## Nafna reglur
 - Feature: Ef um þróun er að ræða þá skal nafn branch byrja á Feature-NafnÁFeature.
 - Bugfix: Þegar verið er að laga einstaka bögg, hvort sem það er útfrá master eða á developer þá skal branch byrja á Hotfix-LýsandiNafnÁÞvíSemÁAðLaga
 - Útgáfa: Við útgáfur skal það branch byrja á Release-Útgáfunúmer.

### Gera daglega
Þegar þú vinnur að breytingu eða fixi þá þarft þú að sjá til þess að þitt branch sé synkað við developer branchið.
Þú mátt auðvitað gera það oftar en einu sinni á dag.
Það er hægt að gera með eftirfarandi skipunum.
```shell 
git checkout developer
git pull
git checkout some-feature
git merge origin/developer
npm test
git push origin some-feature
```

### Hefja vinnu við nýjan fítus, eða bugfix
```shell 
git checkout -b some-feature developer
```
### Viðmótsbreytingar - snapshots
Þegar þú gerir breytingar á viðmóti þá þarf að uppfæra öll snapshot.
það er gert með skipuninni `node node_modules/jest-cli/bin/jest.js -u`
Nýjum snapshotum þarf að adda svona `git add __tests__/__snapshots__` í repo og auðvitað þarf að commit-a þeim líka.

### Þegar þú telur að fítus eða viðgerð er klár
Keyra skal unit test áður en þú push-ar breytingum.
```shell 
npm test
git add .
git commit -m "Fix eða feature tilbúið spurning um að hafa Sögu ID í þessum texta"
git push
```
 Svo skal fara á [heimasíðu repos](http://avamstfs10:8080/tfs/TFS_HL-Voruthroun/Au%C3%B0bj%C3%B6rg/Au%C3%B0bj%C3%B6rg%20Team/_git/Settid) og gera pull-request á developer branch.

### Prófanir - tests
Þegar þú vilt skoða hvað er verið að test þá getur þú gefið skipunina `node node_modules/jest-cli/bin/jest.js --coverage` og opnaðu svo skránna 
`coverage/lcov-report/index.html` til að sjá skýrlsu um code-coverage.

Nokkkrar skipanir tengdar prófunum:
- `npm test` keyra jest test
- `node node_modules/jest-cli/bin/jest.js` keyra jest test
- `node node_modules/jest-cli/bin/jest.js -u` uppfæra snapshot
- `node node_modules/jest-cli/bin/jest.js --coverage` búa til code coverage skýrslu

------------------------------------------
# H Æ T T U L E G T
Farðu varlega í að nota þessar skipanir

#### Eyða remote branch (á reponum)
```shell 
git push origin --delete <branch_name> 
```

#### Eyða Local Branch
```shell 
$ git branch -d branch_name
```
