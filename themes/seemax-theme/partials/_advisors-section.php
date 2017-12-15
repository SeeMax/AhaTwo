<section class="advisors-section">
	<div class="content">
		<div class="advisor-section-title c-20-wide">
			<h2>
				<?php the_field('advisors_headline');?>
			</h2>
			<img class="background-circle" src="<?php echo get_template_directory_uri(); ?>/img/green-circle.svg" >
		</div>
		<div class="advisors-list c-75-wide">
			<?php if( have_rows('advisors_list') ):?>
				<?php while ( have_rows('advisors_list') ) : the_row();?>
					<div class="single-advisor">

						<div class="advisor-image-container">
				      <div class="advisor-image background-image-section"
									<?php 
						      	$image = get_sub_field('advisor_image'); 
						      	$size = 'large'; 
						      	$thumb = $image['sizes'][ $size ];
						      	if (!empty($image))
				      		:?>
				        	style='background-image: url("<?php echo $thumb; ?>");'
				    		<?php endif;?>
				    	>
				    	</div>
				    </div>
				    <div class="advisor-words">
							<h4><?php the_sub_field('advisor_name');?></h4>
							<h4 class="advisor-title"><?php the_sub_field('advisor_title');?></h4>
						</div>
					</div>

			  <?php endwhile;?>
			<?php endif;?>
	</div>
</section>