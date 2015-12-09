その他のゲームモード
===============

Ghost Squadron
---------------

Ghost Squadronモードはすべてのプレイヤーが常時透明化されます。

.. js:data:: Ghost Squadronモードは他のゲームモードと組み合わせる必要があります。

.. code-block:: xml

	<ghostsquadron/>

	<blitz>
		<time>600</time>
		<lives>1</lives>
		<title>Ghost Squadron</title>
	</blitz>

Rage
---------------

Rageモードでは体力に関係なく攻撃が命中するとkillになります。プレイヤー以外のダメージはその限りではありません

.. js:data:: Rageモードは他のゲームモードと組み合わせる必要があります。

.. code-block:: xml

	<rage/>

	<blitz>
		<time>600</time>
		<lives>1</lives>
		<title>Blitz Rage</title>
	</blitz>
