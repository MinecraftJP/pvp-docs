Splatt
===========

Splattゲームモードは各チームの色でブロックを塗りつぶし、自チームのナワバリを増やす事が目標のイカしたゲームです。

このゲームモードでは必ず ``splatt.xml`` を読み込んでください。

.. code-block:: xml

	<splatt materials="wool" hide-progress-time="1m">
		<!-- 制限時間 -->
		<time>5m</time>
	</splatt>
	<include src="splatt.xml"/>

<splatt>ノードの属性
^^^^^^^^^^^^^^^^^^^^

.. csv-table:: 
    :header: "属性", "説明", "値"
    :widths: 15, 10, 20

    "``materials``", インクを塗ることが出来るブロックを指定します。「;」区切りで複数指定する事が可能です。指定可能なブロックは ``WOOL`` |comma| ``STAINED_CLAY`` |comma| ``STAINED_GLASS`` です。未指定の場合は全ての指定可能なブロックが設定されます。, :doc:`Material </data/material>`
    "``hide-progress-time``", 指定時間になるとナワバリの範囲をサイドバーから非表示にします。, "時間"
