Capture the Wool
================

Capture the Woolゲームモードは相手チームの陣地から羊毛を奪い、自チームの台座に設置する事が勝利条件です。

各チームには1つ以上の ``<wool>`` タグが必要です。 現時点では目標が多すぎる場合、スコアボードが表示されなくなるため目標を減らすなどの対応を行ってください。

.. code-block:: xml

	<wools>
		<wool team="blue" color="cyan">
			<!-- 羊毛ブロックを設置する座標 -->
			<block location="-18,14,-46"/>
		</wool>
		<wool team="red" color="pink">
			<!-- 羊毛ブロックを設置する座標 -->
			<block location="18,14,46"/>
		</wool>
	</wools>

<wool>タグの属性
--------------

.. csv-table:: 
    :header: "属性", "説明", "値"
    :widths: 15, 10, 20

    "``team``", 羊毛を設置する側のチーム名です。, "``Chat Color``"
    "``color``", 設置する羊毛の色です。羊毛の色はDyeColorをご覧ください。, "``Dye Color``"