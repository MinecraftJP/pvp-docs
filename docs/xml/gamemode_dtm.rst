Destroy the Monument
======================

Destroy the Monumentゲームモードでは相手チームの破壊対象オブジェクトを破壊する事が勝利条件です。

各チームには一つ以上の ``<destroyable>`` ノードが必要です。

また、それぞれのチームの ``<destroyable>`` ノードは名前がお互い同じ名前として対応している必要があります。別々の名前は使用出来ません

オブジェクト名の左右(L/R)については、攻撃側から見た左右を基準とします。

また、オブジェクト名で目標の場所がはっきりする場合はLeft,Rightに統一する必要はありません。 　　　（例： Adventure Island のocean,remains等。）

.. code-block:: xml

	<destroyables materials="Gold Block" completion="80%">
		<destroyable owner="red" name="Monument">
			<!-- 破壊対象オブジェクトの範囲 -->
			<cuboid min="1603,78,-1548" max="1607,82,-1552"/>
		</destroyable>
		<destroyable owner="blue" name="Monument">
			<!-- 破壊対象オブジェクトの範囲 -->
			<cuboid min="1556,78,-1689" max="1552,82,-1693"/>
		</destroyable>
	</destroyables>

<destroyables>ノードの属性
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. csv-table:: 
    :widths: 15, 10, 20

    "``materials``", モニュメントのMaterialを指定します。, ":doc:`Material </data/material>`"
    "``completion``", 目標の達成に必要なパーセンテージを指定します。, "`Number`"

<destroyable>ノードの属性
^^^^^^^^^^^^^^^^^^^^^^^^^
.. csv-table:: 
    :widths: 15, 10, 20

    "``owner``", モニュメントのオーナーを指定します。 ``<team>`` ノードの ``color`` 属性に入力した値を指定してください。, ":doc:`Material </data/material>`"
    "``name``", モニュメントの名前を指定します。, "`Number`"