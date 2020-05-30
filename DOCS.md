<a name="Smtc"></a>

## Smtc
<p>This is a Smtc class. It's a &quot;S&quot;tate &quot;M&quot;achine &quot;T&quot;est &quot;C&quot;ase generator inspired by https://note.com/yumotsuyo/n/nd3099b40dc1f
Overall flow is the following</p>
<ul>
<li>setContents(file)</li>
<li>initialize()</li>
<li>_flattenStates()</li>
<li>nSwitchCoverage(switch)</li>
<li>printTransitions();</li>
<li>printNSwitch(nSwitchCoverage);</li>
<li>printNSwitchMatrix(nSwitchCoverage);</li>
<li>printDiagram();</li>
</ul>

**Kind**: global class  

* [Smtc](#Smtc)
    * [new Smtc(smcat)](#new_Smtc_new)
    * [.setContents(contents)](#Smtc+setContents) ⇒ [<code>Smtc</code>](#Smtc)
    * [.initialize()](#Smtc+initialize) ⇒ [<code>Smtc</code>](#Smtc)
    * [.nSwitchCoverage()](#Smtc+nSwitchCoverage) ⇒ <code>Array</code>
    * [.printDiagram()](#Smtc+printDiagram)
    * [.printTransitions()](#Smtc+printTransitions)
    * [.printNSwitch(nSwitchCoverage)](#Smtc+printNSwitch)
    * [.printNSwitchMatrix(nSwitchCoverage)](#Smtc+printNSwitchMatrix)
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
<a name="Smtc+nSwitchCoverage"></a>

### smtc.nSwitchCoverage() ⇒ <code>Array</code>
<p>nSwitchCoverage = this.matrix x (n-1)SwitchCoverage</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Returns**: <code>Array</code> - <p>nSwitch culculated coverage</p>  
**Access**: public  
**Params**: <code>Array</code> matrix  
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
<a name="Smtc+printNSwitch"></a>

### smtc.printNSwitch(nSwitchCoverage)
<p>print n switch cases</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| nSwitchCoverage | <code>Array</code> | <p>n switch coverage (default: this.matrix)</p> |

<a name="Smtc+printNSwitchMatrix"></a>

### smtc.printNSwitchMatrix(nSwitchCoverage)
<p>print n switch matrix</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| nSwitchCoverage | <code>Array</code> | <p>one switch coverage</p> |

<a name="Smtc+_clean"></a>

### smtc.\_clean()
<p>PRIVATE:clean up all parameters</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
<a name="Smtc+_flattenStates"></a>

### smtc.\_flattenStates() ⇒ <code>Array</code>
<p>sometimes the states are nested, so we detect all nested and non-nested states.</p>

**Kind**: instance method of [<code>Smtc</code>](#Smtc)  
**Returns**: <code>Array</code> - <p>states flatten the state and fill in this.json.transitions as needed.</p>  
