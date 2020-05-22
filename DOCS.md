<a name="Smtc"></a>

## Smtc
<p>This is a smtc class. It's a state machine test case generator inspired by https://github.com/sylvainhalle/QICT
Overall flow is the following</p>

**Kind**: global class  

* [Smtc](#Smtc)
    * [new Smtc()](#new_Smtc_new)
    * [.readFile(file)](#Smtc+readFile) ⇒ [<code>Smtc</code>](#Smtc)
    * [.initialize()](#Smtc+initialize) ⇒ [<code>Smtc</code>](#Smtc)
    * [.oneStepCoverage()](#Smtc+oneStepCoverage) ⇒ <code>Array</code>
    * [.printDiagram()](#Smtc+printDiagram)
    * [.printTransitions()](#Smtc+printTransitions)
    * [.printZeroStep()](#Smtc+printZeroStep)
    * [.printZeroStepMatrix(oneStepCoverage)](#Smtc+printZeroStepMatrix)
    * [.printOneStep(oneStepCoverage)](#Smtc+printOneStep)
    * [.printOneStepMatrix(oneStepCoverage)](#Smtc+printOneStepMatrix)
    * [._clean()](#Smtc+_clean)

<a name="new_Smtc_new"></a>

### new Smtc()
<p>this._clean()</p>

<a name="Smtc+readFile"></a>

### smtc.readFile(file) ⇒ [<code>Smtc</code>](#Smtc)
<p>When you want to output the state machine of the folloing Parameters and Parameter Values</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Returns**: [<code>Smtc</code>](#Smtc) - <p>this This object</p>  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | <p>Target File</p> |

<a name="Smtc+initialize"></a>

### smtc.initialize() ⇒ [<code>Smtc</code>](#Smtc)
<p>This method can be divided into a first half and a second half.</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Returns**: [<code>Smtc</code>](#Smtc) - <p>this This object</p>  
**Access**: public  
<a name="Smtc+oneStepCoverage"></a>

### smtc.oneStepCoverage() ⇒ <code>Array</code>
<p>This method can be divided into a first half and a second half.</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Returns**: <code>Array</code> - <p>oneStepCoverage culculated coverage</p>  
**Access**: public  
<a name="Smtc+printDiagram"></a>

### smtc.printDiagram()
<p>print diagram</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Access**: public  
<a name="Smtc+printTransitions"></a>

### smtc.printTransitions()
<p>print transitions</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Access**: public  
<a name="Smtc+printZeroStep"></a>

### smtc.printZeroStep()
<p>print zero step cases</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Access**: public  
<a name="Smtc+printZeroStepMatrix"></a>

### smtc.printZeroStepMatrix(oneStepCoverage)
<p>print zero step matrix</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| oneStepCoverage | <code>Array</code> | <p>one step coverage</p> |

<a name="Smtc+printOneStep"></a>

### smtc.printOneStep(oneStepCoverage)
<p>print one step cases</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| oneStepCoverage | <code>Array</code> | <p>one step coverage</p> |

<a name="Smtc+printOneStepMatrix"></a>

### smtc.printOneStepMatrix(oneStepCoverage)
<p>print one step matrix</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| oneStepCoverage | <code>Array</code> | <p>one step coverage</p> |

<a name="Smtc+_clean"></a>

### smtc.\_clean()
<p>PRIVATE:clean up all parameters</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
