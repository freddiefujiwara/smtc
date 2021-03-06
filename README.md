![Node.js CI](https://github.com/freddiefujiwara/smtc/workflows/Node.js%20CI/badge.svg)[![npm version](https://badge.fury.io/js/smtc.svg)](https://badge.fury.io/js/smtc)

# smtc
This is a Smtc class. It's a "S"tate "M"achine "T"est "C"ase generator inspired by https://note.com/yumotsuyo/n/nd3099b40dc1f

Try it in your browser! [TRY IT NOW](https://freddiefujiwara.github.io/smtc/#inputscript)

Document is [here](https://github.com/freddiefujiwara/smtc/blob/master/DOCS.md)

# install

``` shell
$ npm i -g smtc
```

# Usage
## command line
``` shell
# -h:help
# <file>:inputscript
# -s : switch
# -t : output type t:transition/m:matrix/c:testcases/d:diagram
smtc [-h] <file> [-s <0|1|2... (0:default)>] [-t <t|m|c|d (t:default)>]
```

## sample data
![alt text](https://raw.githubusercontent.com/freddiefujiwara/smtc/master/__tests__/testData.svg)

``` shell
$ cat __tests__/testData.txt
initial                  => "Accepting reservations" ;
"Accepting reservations" => "Reservation accepted"   : reserve ;
"Reservation accepted"   => "Reserved"               : approve;
"Reserved"               => "Reservation accepted"   : cancel approval;
"Reservation accepted"   => "Accepting reservations" : reject;
"Reservation accepted"   => "Accepting reservations" : cancel of reservation;
"Reserved"               => "Accepting reservations" : cancel;
"Reserved"               => final                    : car delivered;
```

## Transition matrix
```shell
$ smtc __tests__/testData.txt
```

||[None]|reserve|approve|cancel approval|reject|cancel of reservation|cancel|car delivered|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|**initial**|Accepting reservations||||||||
|**Accepting reservations**||Reservation accepted|||||||
|**Reservation accepted**|||Reserved||Accepting reservations|Accepting reservations|||
|**Reserved**||||Reservation accepted|||Accepting reservations|final|
|**final**|||||||||

## zero switch cases

```shell
$ smtc __tests__/testData.txt -t c
```

|#|State#1|Event#1|State#2|
|:--|:--|:--|:--|
|0|initial|[None]|Accepting reservations|
|1|Accepting reservations|reserve|Reservation accepted|
|2|Reservation accepted|reject|Accepting reservations|
|3|Reservation accepted|cancel of reservation|Accepting reservations|
|4|Reservation accepted|approve|Reserved|
|5|Reserved|cancel|Accepting reservations|
|6|Reserved|cancel approval|Reservation accepted|
|7|Reserved|car delivered|final|

## zero switch matrix
```shell
$ smtc __tests__/testData.txt -t m
```

||initial|Accepting reservations|Reservation accepted|Reserved|final|
|:--|:--|:--|:--|:--|:--|
|**initial**||[None]||||
|**Accepting reservations**|||reserve|||
|**Reservation accepted**||reject,cancel of reservation||approve||
|**Reserved**||cancel|cancel approval||car delivered|
|**final**||||||

## one switch cases
```shell
$ smtc __tests__/testData.txt -t c -s 1
```

|#|State#1|Event#1|State#2|Event#2|State#3|
|:--|:--|:--|:--|:--|:--|
|0|initial|[None]|Accepting reservations|reserve|Reservation accepted|
|1|Accepting reservations|reserve|Reservation accepted|reject|Accepting reservations|
|2|Accepting reservations|reserve|Reservation accepted|cancel of reservation|Accepting reservations|
|3|Accepting reservations|reserve|Reservation accepted|approve|Reserved|
|4|Reservation accepted|approve|Reserved|cancel|Accepting reservations|
|5|Reservation accepted|reject|Accepting reservations|reserve|Reservation accepted|
|6|Reservation accepted|cancel of reservation|Accepting reservations|reserve|Reservation accepted|
|7|Reservation accepted|approve|Reserved|cancel approval|Reservation accepted|
|8|Reservation accepted|approve|Reserved|car delivered|final|
|9|Reserved|cancel approval|Reservation accepted|reject|Accepting reservations|
|10|Reserved|cancel approval|Reservation accepted|cancel of reservation|Accepting reservations|
|11|Reserved|cancel|Accepting reservations|reserve|Reservation accepted|
|12|Reserved|cancel approval|Reservation accepted|approve|Reserved|

## one switch matrix
```shell
$ smtc __tests__/testData.txt -t m -s 1
```

||initial|Accepting reservations|Reservation accepted|Reserved|final|
|:--|:--|:--|:--|:--|:--|
|**initial**|||[None] -> reserve|||
|**Accepting reservations**||reserve -> reject,reserve -> cancel of reservation||reserve -> approve||
|**Reservation accepted**||approve -> cancel|reject -> reserve,cancel of reservation -> reserve,approve -> cancel approval||approve -> car delivered|
|**Reserved**||cancel approval -> reject,cancel approval -> cancel of reservation|cancel -> reserve|cancel approval -> approve||
|**final**||||||

{% include form.html %}
