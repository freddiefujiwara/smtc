<a name="Smtc"></a>

## Smtc
<p>This is a Smtc class. It's a &quot;S&quot;tate &quot;M&quot;achine &quot;T&quot;est &quot;C&quot;ase generator inspired by https://note.com/yumotsuyo/n/nd3099b40dc1f
Overall flow is the following</p>
<ul>
<li>setContents(file)</li>
<li>initialize()</li>
<li>_flattenStates()</li>
<li>oneStepCoverage()</li>
<li>printResult(testSets)</li>
<li>printTransitions();</li>
<li>printZeroStep();</li>
<li>printZeroStepMatrix();</li>
<li>printOneStep(oneStepCoverage);</li>
<li>printOneStepMatrix(oneStepCoverage);</li>
</ul>

**Kind**: global class  

* [Smtc](#Smtc)
    * [new Smtc(smcat)](#new_Smtc_new)
    * [.setContents(contents)](#Smtc+setContents) ⇒ [<code>Smtc</code>](#Smtc)
    * [.initialize()](#Smtc+initialize) ⇒ [<code>Smtc</code>](#Smtc)
    * [.oneStepCoverage()](#Smtc+oneStepCoverage) ⇒ <code>Array</code>
    * [.printDiagram()](#Smtc+printDiagram)
    * [.printTransitions()](#Smtc+printTransitions)
    * [.printZeroStep()](#Smtc+printZeroStep)
    * [.printZeroStepMatrix()](#Smtc+printZeroStepMatrix)
    * [.printOneStep(oneStepCoverage)](#Smtc+printOneStep)
    * [.printOneStepMatrix(oneStepCoverage)](#Smtc+printOneStepMatrix)
    * [._clean()](#Smtc+_clean)
    * [._flattenStates()](#Smtc+_flattenStates) ⇒ <code>Array</code>

<a name="new_Smtc_new"></a>

### new Smtc(smcat)
<p>this._clean()</p>


| Param | Type | Description |
| --- | --- | --- |
| smcat | <code>state-machine-cat</code> | <p>this is for webapp</p> |

<a name="Smtc+setContents"></a>

### smtc.setContents(contents) ⇒ [<code>Smtc</code>](#Smtc)
<p>fill this.contents from outside of this instance</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Returns**: [<code>Smtc</code>](#Smtc) - <p>this This object</p>  

| Param | Type | Description |
| --- | --- | --- |
| contents | <code>string</code> | <p>Target Contents</p> |

<a name="Smtc+initialize"></a>

### smtc.initialize() ⇒ [<code>Smtc</code>](#Smtc)
<p>In this method, it aims to fill the following parameters</p>
<ul>
<li>this.states</li>
<li>this.events</li>
<li>this.transitions</li>
<li>this.matrix</li>
</ul>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Returns**: [<code>Smtc</code>](#Smtc) - <p>this This object</p>  
**Access**: public  
<a name="Smtc+oneStepCoverage"></a>

### smtc.oneStepCoverage() ⇒ <code>Array</code>
<p>oneStepCoverage = this.matrix x this.matrix</p>

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

### smtc.printZeroStepMatrix()
<p>print zero step matrix</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Access**: public  
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
<a name="Smtc+_flattenStates"></a>

### smtc.\_flattenStates() ⇒ <code>Array</code>
<p>sometimes the states are nested, so we detect all nested and non-nested states.</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Returns**: <code>Array</code> - <p>states flatten the state and fill in this.json.transitions as needed.</p>  
**Access**: public  
