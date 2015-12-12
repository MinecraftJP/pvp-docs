キル報酬
========

相手チームのプレイヤーを殺害時にプレイヤーに報酬を与える事が出来ます。 報酬は :doc:`<item> </xml/items>` 、 `<kit> </xml/kits>` により指定が可能です。
条件を設定するために :doc:`<filter> </xml/filters>` を指定する事も出来ます。

.. code-block:: xml

   <killreward>
       <item amount="1">diamond</item>
   </killreward>

   <killreward>
       <kit>
           <potion duration="10" amplifier="1" ambient="true">jump</potion>
       </kit>
   </killreward>

   <killreward>
       <filter>
           <random>[0.5, 1)</random>
       </filter>
       <kit name="portal-key"/>
   </killreward>
